import {BLOG_POSTS} from "@/mocks/blogPosts";
import {BLOG_SOURCE, coverFileName, getBlogSync, startBlogSync} from "@/lib/blogSync.mjs";
import fallbackCover from "@/assets/blog/post1.webp";

const TIME_ZONE = "America/Sao_Paulo";
const DEFAULT_AUTHOR = "Leste Telecom";
const DEFAULT_CTA = "Saiba mais >";
const NEWS_MIN_POSTS = 6;

export function formatBlogDate(value, month = "long") {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month,
    year: "numeric",
    timeZone: TIME_ZONE,
  });
}

function fromMock(post) {
  const publishedAt = `${post.date}T12:00:00-03:00`;

  return {
    source: BLOG_SOURCE.MOCK,
    slug: post.slug,
    href: post.href,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    publishedAt,
    revisedAt: publishedAt,
    readingTime: post.readingTime,
    image: post.image,
    imageAlt: post.title,
    cta: post.cta,
    blocks: post.content,
  };
}

function fromErp(post, coverUrl) {
  return {
    source: BLOG_SOURCE.ERP,
    slug: post.slug,
    href: `/blog/${post.slug}`,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category?.name,
    author: post.authorName || DEFAULT_AUTHOR,
    publishedAt: post.publishedAt,
    revisedAt: post.contentUpdatedAt || post.publishedAt,
    readingTime: `${post.readingTimeMinutes} min de leitura`,
    image: coverUrl || fallbackCover,
    imageAlt: post.coverImageAlt || post.title,
    cta: DEFAULT_CTA,
    blocks: post.blocks,
    showInNews: post.showInNews === 1,
    newsSortOrder: post.newsSortOrder,
  };
}

async function resolveCoverUrl(service, post) {
  const fileName = coverFileName(post.coverImageUrl);
  if (!fileName || !(await service.hasCover(fileName))) return null;
  return `/api/blog/image/${encodeURIComponent(fileName)}`;
}

export async function getBlogPosts() {
  startBlogSync();
  const service = getBlogSync();
  const {source, snapshot} = await service.getState();

  if (source === BLOG_SOURCE.MOCK) {
    return {source, posts: BLOG_POSTS.map(fromMock)};
  }

  const posts = await Promise.all(
    snapshot.posts.map(async (post) => fromErp(post, await resolveCoverUrl(service, post)))
  );
  return {source, posts};
}

export async function getBlogPost(slug, recentLimit = 3) {
  const {posts} = await getBlogPosts();
  const post = posts.find((item) => item.slug === slug) || null;
  const recentPosts = post ? posts.filter((item) => item.slug !== slug).slice(0, recentLimit) : [];
  return {post, recentPosts};
}

export async function getBlogNews() {
  const {source, posts} = await getBlogPosts();
  if (source === BLOG_SOURCE.MOCK) return {source, posts: []};

  const featured = posts
    .filter((post) => post.showInNews)
    .sort((left, right) => left.newsSortOrder - right.newsSortOrder);
  const recent = posts
    .filter((post) => !post.showInNews)
    .slice(0, Math.max(0, NEWS_MIN_POSTS - featured.length));

  const news = [...featured, ...recent]
    .map(({slug, href, title, excerpt, image, cta}) => ({slug, href, title, excerpt, image, cta}));
  return {source, posts: news};
}

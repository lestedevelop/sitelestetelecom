import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import {BLOG_POSTS, getBlogPostBySlug, getRecentBlogPosts} from "@/mocks/blogPosts";

function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Leste Telecom",
    };
  }

  return {
    title: `${post.title} | Leste Telecom`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({params}) {
  const {slug} = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return notFound();

  const recentPosts = getRecentBlogPosts(post.slug);

  return (
    <main className="bg-light">
      <article className="container py-12">
        <TitleFaq
          eyebrow="Blog"
          href="/blog"
          title={post.title}
          breadcrumb={[
            {label: "Blog", href: "/blog"},
            {label: post.category, href: "/blog"},
            {label: post.title},
          ]}
        />

        <div className="mt-6 flex flex-wrap gap-2 text-sm text-graylight">
          <span className="font-semibold text-darkgreen">{post.author}</span>
          <span>&gt;</span>
          <span>{formatDate(post.date)}</span>
          <span>&gt;</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
          <div className="relative aspect-[16/9] w-full">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
          </div>
        </div>

        <div className="mt-10 max-w-4xl text-base leading-8 text-dark md:text-lg md:leading-9">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: {formatDate(post.date)}
        </p>
      </article>

      <section className="bg-light">
        <div className="container pb-4">
          <div className="rounded-2xl bg-white px-6 py-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)] md:px-8">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Posts recentes
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {recentPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group block overflow-hidden rounded-xl border border-graylighter bg-light">
                  <div className="relative aspect-[16/10]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-tight text-darkgreen group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SupportFooter />
    </main>
  );
}

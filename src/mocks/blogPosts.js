import posts from "@/mocks/blogPosts.json";
import post1 from "@/assets/blog/post1.webp";
import post2 from "@/assets/blog/post2.webp";
import post3 from "@/assets/blog/post3.webp";
import post4 from "@/assets/blog/post4.webp";
import post5 from "@/assets/blog/post5.webp";

const BLOG_IMAGES = {
  post1,
  post2,
  post3,
  post4,
  post5,
};

export const BLOG_POSTS = posts.map((post) => ({
  ...post,
  href: `/blog/${post.slug}`,
  image: BLOG_IMAGES[post.imageKey] || post1,
}));

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(slug, limit = 3) {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}

export function getHomeBlogPosts() {
  return BLOG_POSTS.filter((post) => post.showOnHome);
}

export function getClientAreaBlogPosts() {
  return BLOG_POSTS.filter((post) => post.showOnClientArea);
}

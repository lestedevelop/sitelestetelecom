import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import BlogPostContent from "@/pageComponents/blog/BlogPostContent";
import {formatBlogDate, getBlogPost} from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({params}) {
  const {slug} = await params;
  const {post} = await getBlogPost(slug);

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
  const {post, recentPosts} = await getBlogPost(slug);

  if (!post) return notFound();

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
          <span>{formatBlogDate(post.publishedAt)}</span>
          <span>&gt;</span>
          <span>{post.readingTime}</span>
        </div>

        {post.excerpt ? (
          <p className="mt-6 max-w-5xl text-lg leading-8 text-darkgreen md:text-xl md:leading-9">
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
          <div className="relative aspect-[16/9] w-full">
            <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" />
          </div>
        </div>

        <BlogPostContent post={post} />

        <p className="mt-12 text-sm text-graylight">
          Última revisão em: {formatBlogDate(post.revisedAt)}
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
                    <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
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

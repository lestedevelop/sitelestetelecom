import Image from "next/image";
import Link from "next/link";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import {BLOG_POSTS} from "@/mocks/blogPosts";

function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq
          eyebrow="Blog"
          href="/"
          title="Conteudos e novidades"
          breadcrumb={[
            {label: "Inicio", href: "/"},
            {label: "Blog"},
          ]}
        />

        <div className="mt-10 space-y-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] md:grid md:grid-cols-[320px_1fr]">
              <Link href={`/blog/${post.slug}`} className="relative block min-h-[220px]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </Link>

              <div className="p-6 md:p-8">
                <div className="text-sm text-graylight">
                  {post.category} &gt; {formatDate(post.date)} &gt; {post.readingTime}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-darkgreen transition hover:text-primary md:text-4xl">
                    {post.title}
                  </h2>
                </Link>

                <p className="mt-4 text-base leading-7 text-dark">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-bold text-white transition hover:bg-darkgreen">
                  Ler artigo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

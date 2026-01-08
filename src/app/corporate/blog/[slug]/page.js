import { notFound } from "next/navigation";
import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import RecentPosts from "@/pageComponents/corporate/blog/RecentPosts";
import CommentsBox from "@/pageComponents/corporate/blog/CommentsBox";
import post2 from "@/assets/blog/post2.png";
import post3 from "@/assets/blog/post3.png";
import post4 from "@/assets/blog/post4.png";

async function getPostBySlug(slug) {
   return {
       "title": "Título",
       "coverUrl": post2.src,
       "authorName": "Autor",
       "dateISO": "2023-04-18",
       "readingTime": "2 min de leitura",
       "contentHtml": "<p>...</p>"
   };
}

const recentPosts = [
    { id: "1", title: "Ter Wi-Fi liberado para clientes?", href: "/corporate/blog/ter-wifi", image: post2.src, comments: 0 },
    { id: "2", title: "Vantagens de um link dedicado.", href: "/corporate/blog/link", image: post4.src, comments: 0 },
    { id: "3", title: "Link dedicado.", href: "/corporate/blog/link-dedicado", image: post3.src, comments: 0 },
];

export default async function BlogPostPage({ params }) {

    const post = await getPostBySlug(params.slug);
    if (!post) return notFound();

    return (
       <div className="min-h-screen">
           <AppBarCorporate />
           <article className="bg-white mt-[120px] md:mt-[155px]">
               <div className="container px-6 py-12">
                   {post.title ? (
                       <h1 className="text-4xl sm:text-5xl font-extrabold text-dark leading-tight">
                           {post.title}
                       </h1>
                   ) : null}

                   {(post.authorName || post.dateISO || post.readingTime) ? (
                       <div className="mt-4 text-graylight flex flex-wrap gap-2">
                           {post.authorName ? <span className="text-dark font-medium">{post.authorName}</span> : null}
                           {post.authorName && (post.dateISO || post.readingTime) ? <span>•</span> : null}
                           {post.dateISO ? <span>{post.dateISO}</span> : null}
                           {post.readingTime ? (
                               <>
                                   {post.dateISO ? <span>•</span> : null}
                                   <span>{post.readingTime}</span>
                               </>
                           ) : null}
                       </div>
                   ) : null}

                   {post.coverUrl ? (
                       <div className="mt-8 w-full aspect-[16/9] bg-graylighter overflow-hidden rounded-xl">
                           <img
                               src={post.coverUrl}
                               alt={post.title || "Capa do post"}
                               className="w-full h-full object-cover"
                           />
                       </div>
                   ) : null}

                   <div className="mt-10">
                       <div
                           className="prose max-w-none"
                           dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                       />
                   </div>
               </div>
           </article>
           <RecentPosts posts={recentPosts} />
           <CommentsBox />
           <FooterCorporate />
       </div>
    );
}

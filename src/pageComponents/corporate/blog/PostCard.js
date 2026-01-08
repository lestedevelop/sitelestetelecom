import Link from "next/link";

function formatDate(date) {
    return new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function PostCard({ post }) {
    return (
        <article className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 py-10 border-b border-graylighter">
            {/* Imagem */}
            <Link href={`/corporate/blog/${post.slug}`} className="block">
                <div className="w-full aspect-[16/10] bg-graylighter overflow-hidden">
                    <img
                        src={post.image.src}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>

            {/* Conteúdo */}
            <div>
                <div className="flex items-start gap-4 text-sm text-graylight">
                    <div className="w-10 h-10 rounded-full bg-graylighter" />

                    <div>
                        <div className="text-dark font-medium">{post.author}</div>
                        <div className="mt-1">
                            {formatDate(post.date)} • {post.readingTime}
                        </div>
                    </div>

                    <div className="ml-auto">⋮</div>
                </div>

                <Link href={`/corporate/blog/${post.slug}`}>
                    <h2 className="mt-5 text-4xl font-extrabold text-dark leading-tight hover:text-primary transition">
                        {post.title}
                    </h2>
                </Link>

                <p className="mt-4 text-lg text-graylight leading-relaxed">
                    {post.excerpt}
                </p>

                <div className="mt-10 flex items-center gap-2">
                    <span className="text-dark">{post.likes}</span>
                    <span className="text-red-500">♡</span>
                </div>
            </div>
        </article>
    );
}

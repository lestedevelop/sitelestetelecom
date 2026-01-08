import Link from "next/link";
import {MessageSquare} from "lucide-react";


export default function RecentPostCard({post}) {
    return (
        <Link href={post.href} className="block border border-graylighter bg-white overflow-hidden">
            <div className="w-full aspect-[16/9] bg-graylighter overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-8">
                <h3 className="text-primary font-extrabold text-md leading-snug">
                    {post.title}
                </h3>

                <div className="mt-6 h-px bg-graylighter"/>

                <div className="mt-5 flex items-center gap-2 text-dark">
                    <MessageSquare className="w-5 h-5"/>
                    <span className="text-base">{post.comments ?? 0}</span>
                </div>
            </div>
        </Link>
    );
}
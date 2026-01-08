"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RecentPostCard from "@/pageComponents/corporate/blog/RecentPostCard";


export default function RecentPosts({
                                        title = "Posts recentes",
                                        viewAllLabel = "Ver tudo",
                                        viewAllHref = "/corporate/blog",
                                        posts = [],
                                    }) {
    return (
        <section className="bg-white py-12">
            <div className="container px-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-dark text-xl font-medium">{title}</h2>
                    <Link href={viewAllHref} className="text-dark text-lg hover:underline">
                        {viewAllLabel}
                    </Link>
                </div>

                <div className="mt-6 md:hidden">
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1.1 },
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post.id || post.href}>
                                <RecentPostCard post={post} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-6 hidden md:grid grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <RecentPostCard key={post.id || post.href} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

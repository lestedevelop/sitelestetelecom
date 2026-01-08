"use client";

import { useMemo, useState } from "react";
import PostCard from "@/pageComponents/corporate/blog/PostCard";
import BlogTabs from "@/pageComponents/corporate/blog/BlogTabs";
import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import post1 from "@/assets/blog/post1.png"
import post2 from "@/assets/blog/post2.png"
import post3 from "@/assets/blog/post3.png"
import post4 from "@/assets/blog/post4.png"
import post5 from "@/assets/blog/post5.png"
/* ================= MOCK ================= */
const CATEGORIES = [
    { key: "all", label: "Todos os posts" },
    { key: "noticias", label: "Notícias" },
    { key: "dicas", label: "Dicas" },
    { key: "seguranca", label: "Segurança" },
    { key: "solucoes", label: "Soluções" },
];

const POSTS = [
    {
        id: "1",
        slug: "como-a-internet-pode-ajudar-o-meu-evento",
        title: "Como a internet pode ajudar o meu evento?",
        excerpt:
            "Hoje em dia, os eventos não se limitam apenas a ambientes físicos. Eles são transmitidos simultaneamente através das redes sociais ou...",
        category: "noticias",
        author: "Talita Carvalho",
        date: "2023-04-18",
        readingTime: "2 min de leitura",
        image: post1,
        likes: 1,
    },
    {
        id: "2",
        slug: "vantagens-de-link-dedicado",
        title: "Vantagens de um link dedicado.",
        excerpt:
            "Sua empresa precisa desfrutar desses benefícios! O link dedicado é a opção completa para sua empresa que precisa de uma internet...",
        category: "dicas",
        author: "Talita Carvalho",
        date: "2023-04-12",
        readingTime: "2 min de leitura",
        image: post2,
        likes: 1,
    },
    {
        id: "3",
        slug: "link-dedicado.",
        title: "Link dedicado.",
        excerpt:
            "Com a necessidade de aumentar a produtividade, muitas empresas atualmente têm a internet como ferramenta principal para manter suas gestões",
        category: "dicas",
        author: "Talita Carvalho",
        date: "2023-04-12",
        readingTime: "2 min de leitura",
        image: post3,
        likes: 1,
    },
    {
        id: "4",
        slug: "ter-wifi-liberado-para-clientes",
        title: "Ter Wi-Fi liberado para clientes?",
        excerpt:
            "Você é proprietário(a) de um estabelecimento ou loja que possui fluxo de pessoas? Fique até o final! Nos dias...",
        category: "dicas",
        author: "Talita Carvalho",
        date: "2023-04-12",
        readingTime: "2 min de leitura",
        image: post4,
        likes: 1,
    },
    {
        id: "5",
        slug: "conheça-a-leste-corporate",
        title: "Conheça a Leste Corporate!",
        excerpt:
            "A melhor solução de internet empresarial para sua empresa. Somos uma das maiores empresas de telecomunicações do Leste Fluminense e...",
        category: "dicas",
        author: "Talita Carvalho",
        date: "2023-04-12",
        readingTime: "2 min de leitura",
        image: post5,
        likes: 1,
    },
];
/* ======================================== */

export default function CorporateBlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "all") return POSTS;
        return POSTS.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div>
            <AppBarCorporate />
            <section className="bg-white mt-[120px] md:mt-[155px]">
                <div className="container py-10">
                    <BlogTabs
                        categories={CATEGORIES}
                        active={activeCategory}
                        onChange={setActiveCategory}
                    />

                    <div className="mt-6">
                        {filteredPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}

                    </div>
                </div>
            </section>
            <FooterCorporate />
        </div>
    );
}

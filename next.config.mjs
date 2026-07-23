/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/api/home/image",
            },
            {
                pathname: "/404-leste.jpg",
            },
        ],
    },
    async redirects() {
        return [
            {source: "/vendas-cadastro-inicial", destination: "/vendas", permanent: false},
        ];
    },
    async rewrites() {
        return [
            {source: "/vendas-cadastro-completo", destination: "/vendas"},
            {source: "/vendas-planos", destination: "/vendas"},
            {source: "/vendas-agendamento", destination: "/vendas"},
            {source: "/vendas-revisao", destination: "/vendas"},
            {source: "/vendas-assinatura", destination: "/vendas"},
            {source: "/vendas-sem-viabilidade", destination: "/vendas"},
        ];
    },
};

export default nextConfig;

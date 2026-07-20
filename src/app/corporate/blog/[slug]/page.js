import { notFound } from "next/navigation";
import {CircleUserRound, EllipsisVertical, Link2} from "lucide-react";
import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import RecentPosts from "@/pageComponents/corporate/blog/RecentPosts";
import CommentsBox from "@/pageComponents/corporate/blog/CommentsBox";
import post1 from "@/assets/blog/post1.webp";
import post2 from "@/assets/blog/post2.webp";
import post3 from "@/assets/blog/post3.webp";
import post4 from "@/assets/blog/post4.webp";
import post5 from "@/assets/blog/post5.webp";
import eventPresentation from "@/assets/blog/como-pode-ajudar-meu-evento.png";
import wifiCustomers from "@/assets/blog/ter-wifi-liberado-cliente.png";
import dedicatedBenefits from "@/assets/blog/vantagens-ter-link-dedicado.png";
import dedicatedLink from "@/assets/blog/link-dedicado.png";
import providersImage from "@/assets/blog/quem-sao-fornecedores.png";
import corporateTeam from "@/assets/blog/conheca-leste-corporate.png";

const POSTS_BY_SLUG = {
   "ter-wifi-liberado-para-clientes": {
       title: "Ter Wi-Fi liberado para clientes?", coverUrl: wifiCustomers.src, authorName: "Talita Carvalho", dateISO: "2023-04-12", readingTime: "2 min de leitura",
       contentHtml: `<p>Você é proprietário(a) de um estabelecimento ou loja que possui fluxo de pessoas? Fique até o final.</p><p>Hoje, cafés, restaurantes, hotéis e lojas costumam oferecer Wi-Fi gratuito. Muitos negócios, porém, ainda não aproveitam essa oportunidade para melhorar a experiência de quem visita o local e conhecer melhor seu público.</p><p>Um HotSpot é uma solução inteligente para oferecer Wi-Fi gratuito. Integrado às ações de marketing, ele ajuda a fortalecer a marca, fidelizar clientes e apoiar novas vendas.</p><h2>O que é HotSpot?</h2><p>É um ponto de acesso à internet sem fio disponibilizado pelo estabelecimento. O acesso é liberado por login, com coleta de dados autorizada pelo cliente. Por isso, é muito usado em shoppings, lojas, clínicas e aeroportos.</p><p>As informações coletadas ficam disponíveis para a empresa contratante, que pode criar uma comunicação mais relevante com pessoas que já conhecem sua marca: campanhas de retorno, descontos e outros benefícios.</p><h2>Onde encontrar essa solução?</h2><p>A Leste Corporate oferece soluções de internet para empresas e eventos, com projetos voltados à praticidade, eficiência e experiência de uso.</p><p>Nosso HotSpot utiliza tecnologia Mesh e autenticação por login, com segurança e atenção à LGPD. A solução pode atender desde restaurantes até grandes praças, sempre de acordo com a necessidade do negócio.</p><p><strong>Entre em contato e peça seu HotSpot.</strong></p>`,
   },
   "vantagens-de-link-dedicado": {
       title: "Vantagens de um link dedicado.", coverUrl: null, authorName: "Talita Carvalho", dateISO: "2023-03-08", readingTime: "2 min de leitura",
       contentHtml: `<h2>Sua empresa precisa desfrutar desses benefícios!</h2><img src="${dedicatedBenefits.src}" alt="Análise de dados para empresas" /><p>O link dedicado é a opção completa para sua empresa que precisa de uma internet empresarial estável, rápida, segura e com profissionais especializados para ajudar a sua empresa a alcançar seus objetivos com a melhor conectividade de internet.</p><p>Algumas vantagens de ter essa solução na sua empresa:</p><h3>Velocidade simétrica</h3><p>Como o link dedicado possui velocidade síncrona de Download e Upload, colocar arquivos pesados na nuvem ou baixar levará segundos, já que não há interferência entre eles.</p><h3>Maior estabilidade</h3><p>O link dedicado é uma solução empresarial exclusiva, projetada para as necessidades da sua empresa. Sendo assim, falhas e instabilidades são raras de ocorrer.</p><h3>Atendimento e Suporte Técnico 24h</h3><p>Por ser uma solução exclusiva, os provedores que fornecem o link dedicado trabalham com equipes especializadas e exclusivas para atender e dar suporte a qualquer hora, o mais breve possível.</p><h3>Maior monitoramento</h3><p>As equipes se mantêm frequentemente monitorando a rede para que não ocorram falhas e quedas de sinal. Caso ocorra algum problema, ele será solucionado rapidamente.</p><h3>Total controle de banda</h3><p>O controle da banda é essencial nos momentos em que o fluxo de dados de vários setores aumenta. Com o link dedicado, você conseguirá controlar a quantidade de banda usada, sem interferir ou limitar o tráfego de informações.</p><p>As vantagens são inúmeras em comparação com um link compartilhado, o que torna essa solução um ótimo custo-benefício.</p><p>Mas, para além das vantagens acima, o provedor que fornece esse tipo de solução precisa manter seus equipamentos atualizados, afinal, os avanços não param.</p><p>Por isso, aqui na Leste, além de fornecermos todas as vantagens já citadas, nos preocupamos em ter equipamentos de última geração para oferecer sempre o melhor serviço.</p><p>Entre em contato conosco agora mesmo, peça seu link dedicado e veja como ele ajudará sua empresa a alcançar seus objetivos com a melhor conectividade de internet.</p>`,
   },
   "link-dedicado.": {
       title: "Link dedicado.", coverUrl: null, authorName: "Talita Carvalho", dateISO: "2023-03-08", readingTime: "2 min de leitura",
       contentHtml: `<h2>Será que minha empresa precisa?</h2><img src="${dedicatedLink.src}" alt="Equipe trabalhando com conexão dedicada" /><p>Com a necessidade de aumentar a produtividade, muitas empresas atualmente têm a internet como ferramenta principal para manter suas gestões cotidianas mais rápidas, eficientes e sempre funcionando.</p><h2>O que é Link Dedicado?</h2><p>É uma solução indicada para empresas que precisam de alta disponibilidade, confiabilidade e segurança na conexão de internet, como empresas que realizam transações financeiras online, hospedagem de servidores, transmissão de vídeo em alta resolução ou outras atividades que exijam alta performance e estabilidade da rede.</p><h2>Qual a diferença entre link dedicado e link compartilhado?</h2><p>Um link dedicado tem mais a ofertar à sua empresa que um link compartilhado, pois possui mais vantagens e exclusividades essenciais para um melhor funcionamento das empresas.</p><p>Em contrapartida aos links compartilhados, o link dedicado é uma conexão exclusiva, adaptável e pensada nas reais necessidades do seu negócio, garantindo que não haverá divisão de conexão com outras empresas.</p><h2>Quem são os fornecedores?</h2><p>Alguns provedores de telecomunicações fornecem esse serviço específico para empresas de grande e médio porte, que necessitam manter tudo funcionando sem falhas, com manutenção rápida e atendimento priorizado.</p><img src="${providersImage.src}" alt="Profissional em infraestrutura de rede" /><p>Aqui na Leste nós ofertamos a solução de Link Dedicado para empresas de grande e médio porte, com uma conexão segura e veloz. Pode ser aplicável em diversas topologias:</p><ul><li>FTTx</li><li>Ponto a Ponto (P2P)</li><li>Rede Metro</li></ul><p>Sendo 100% fibra óptica, garante maior flexibilidade e velocidade, capaz de atender todas as necessidades da sua empresa.</p><p>Com ele, sua empresa poderá desfrutar de Downloads e Uploads síncronos, com a tecnologia Giga ethernet tendo a maior velocidade com a menor latência, usando equipamentos de última geração e atendimento exclusivo com equipes altamente qualificadas para dar todo o suporte necessário.</p><p>Não perca tempo com conexões instáveis e compartilhadas.</p><p>Entre em contato conosco hoje mesmo para saber como nosso link dedicado vai ajudar sua empresa a alcançar seus objetivos com a melhor conectividade de internet.</p>`,
   },
   "conheca-a-leste-corporate": {
       title: "Conheça a Leste Corporate!", coverUrl: post5.src, authorName: "Talita Carvalho", dateISO: "2023-03-08", readingTime: "1 min de leitura",
       contentHtml: `<h2>A melhor solução de internet empresarial para sua empresa.</h2><p>Somos uma das maiores empresas de telecomunicações do Leste Fluminense e oferecemos soluções de conectividade para negócios. Atuamos no segmento empresarial desde 2004, com redes de fibra óptica e tecnologia Metro Ethernet.</p><p>Por meio da unidade Corporate, oferecemos soluções exclusivas, monitoramento pelo Centro de Gerenciamento de Rede, atendimento especializado 24 horas e planos personalizados para a necessidade de cada cliente.</p><p>Nosso BackOffice conta com estrutura óptica qualificada e ferramentas de análise física e lógica para manter uma operação confiável.</p><p>Essa estrutura, somada a uma equipe preparada, nos permite atender às necessidades reais da sua empresa e buscar a máxima qualidade de conexão.</p><p><strong>Fale com a Leste Corporate e encontre a conectividade ideal para o seu negócio.</strong></p>`,
   },
};

POSTS_BY_SLUG["vantagens-de-um-link-dedicado"] = POSTS_BY_SLUG["vantagens-de-link-dedicado"];
POSTS_BY_SLUG["link-dedicado"] = POSTS_BY_SLUG["link-dedicado."];

const corporatePost = {
   title: "Conheça a Leste Corporate!",
   coverUrl: null,
   authorName: "Talita Carvalho",
   dateISO: "2023-03-08",
   readingTime: "1 min de leitura",
   contentHtml: `<h2>A melhor solução de internet empresarial para sua empresa.</h2><img src="${corporateTeam.src}" alt="Equipe da Leste Corporate em reunião" /><p>Somos uma das maiores empresas de telecomunicações do Leste Fluminense e oferecemos a melhor alternativa de internet para o seu negócio.</p><p>Atuamos no segmento empresarial desde 2004, com redes 100% Fibra Ótica e tecnologia Metro Ethernet, proporcionando conexões de alta velocidade, infraestrutura e estabilidade para nossos clientes.</p><p>Através da unidade Corporate, apresentamos soluções de internet exclusivas para sua empresa, que incluem monitoramento completo por meio do maior e mais abrangente Centro de Gerenciamento de Rede (CGR) da região, além de atendimento especializado disponível 24 horas e com menor SLA.</p><p>Nossos planos de internet empresarial são personalizados para atender às necessidades específicas de cada cliente, garantindo a melhor experiência de navegação.</p><p>Nosso BackOffice conta com uma estrutura óptica incomparável, altamente qualificada e equipada com as melhores ferramentas e aplicações de análises físicas e lógicas.</p><p>Isso só é possível graças à nossa equipe altamente preparada para atender às necessidades reais da sua empresa e garantir a máxima qualidade de conexão de internet.</p><p>Se está procurando por uma empresa confiável e experiente em internet empresarial, não hesite em entrar em contato conosco.</p><p>Estamos prontos para ajudá-lo a impulsionar o sucesso do seu negócio por meio da melhor conectividade de internet.</p>`,
};

POSTS_BY_SLUG["conheca-a-leste-corporate"] = corporatePost;
POSTS_BY_SLUG["conhe" + "\u00e7" + "a-a-leste-corporate"] = corporatePost;
POSTS_BY_SLUG["conheca-a-leste-corporate"] = POSTS_BY_SLUG["conheca-a-leste-corporate"];

async function getPostBySlug(slug) {
   const normalizedSlug = String(slug || "")
       .normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "");
   if (normalizedSlug === "conheca-a-leste-corporate") return corporatePost;
   if (POSTS_BY_SLUG[slug] || POSTS_BY_SLUG[normalizedSlug]) {
       return POSTS_BY_SLUG[slug] || POSTS_BY_SLUG[normalizedSlug];
   }

   if (slug === "como-a-internet-pode-ajudar-o-meu-evento") {
       return {
           title: "Como a internet pode ajudar o meu evento?",
           coverUrl: eventPresentation.src,
           authorName: "Talita Carvalho",
           dateISO: "2023-04-18",
           readingTime: "2 min de leitura",
           contentHtml: `
               <p>Hoje em dia, os eventos não se limitam apenas a ambientes físicos. Eles são transmitidos simultaneamente através das redes sociais ou plataformas de streaming. Por isso, uma boa conexão tornou-se indispensável e, para além das transmissões, uma boa conexão via Wi-Fi pode impactar positivamente o evento.</p>
               <p>Levando em conta que o local escolhido para o evento não possui um bom sinal de celular, como garantir que as pessoas que ali estão consigam acessar suas redes sociais?</p>
               <p>Pode parecer bobagem, mas a rede social é o melhor lugar para divulgação. Quanto mais seu evento for postado, mais divulgado ele será. E a melhor divulgação é a divulgação orgânica, onde a pessoa escolhe postar highlights do seu evento, mostrando detalhes para quem os segue, e ainda podem marcar você ou sua marca.</p>
               <p>Para esses momentos, alguns provedores oferecem soluções de internet como:</p>
               <h2>HotSpot</h2>
               <p>É um ponto físico para acesso à conexão sem fio Wi-Fi, permitindo que as pessoas se conectem à rede para compartilhar dados, checar as redes sociais, ver vídeos e navegar pela internet.</p>
               <h2>Link dedicado</h2>
               <p>Ambos são ideais para disponibilizar internet de modo fácil e seguro, proporcionando mais segurança e uma melhor experiência a todos que vão utilizar a conexão.</p>
               <p>Indo para além de uma boa internet ofertada no evento, o HotSpot pode ser usado para captação de leads qualificados. Para ter acesso à internet, a pessoa preenche um pequeno formulário com nome, e-mail e mais alguns dados que, após o evento, são enviados aos contratantes.</p>
               <p>Essa captação tem grande assertividade, já que quem foi ao evento possui interesse em consumir mais da sua marca. Agora é só ajustar a estratégia com a equipe de marketing e fidelizar esses leads.</p>
               <img src="${post1.src}" alt="Clientes utilizando a conexão da Leste Corporate" />
               <h2>Aqui na Leste, você encontra as duas soluções!</h2>
               <p>O HotSpot e o Link dedicado são projetados exclusivamente para seu evento, pensando em comodidade e cobertura total.</p>
               <p>Como o projeto é customizável, conseguimos adaptar a solução escolhida às necessidades do evento. Nossos HotSpots consistem em pontos de acesso transmitidos por Wi-Fi com tecnologia Mesh e sistema de autenticação.</p>
               <p>Conte com o HotSpot ou Link dedicado Leste Corporate e realize seu evento com a qualidade do melhor provedor da região.</p>
               <p><strong>Fale com a gente!</strong></p>
           `,
       };
   }

   return {
       "title": "Título",
       "coverUrl": post2.src,
       "authorName": "Autor",
       "dateISO": "2023-04-18",
       "readingTime": "2 min de leitura",
       "contentHtml": "<p>...</p>"
   };
}

function formatDate(dateISO) {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${dateISO}T12:00:00Z`));
}

const recentPosts = [
    { id: "1", title: "Ter Wi-Fi liberado para clientes?", href: "/corporate/blog/ter-wifi-liberado-para-clientes", image: post2.src, comments: 0 },
    { id: "2", title: "Vantagens de um link dedicado.", href: "/corporate/blog/vantagens-de-link-dedicado", image: post3.src, comments: 0 },
    { id: "3", title: "Link dedicado.", href: "/corporate/blog/link-dedicado.", image: post3.src, comments: 0 },
];

export default async function BlogPostPage({ params }) {

    const {slug} = await params;
    const post = await getPostBySlug(slug);
    if (!post) return notFound();

    return (
       <div className="min-h-screen">
           <AppBarCorporate />
           <article className="mt-[120px] bg-white md:mt-[155px]">
               <div className="mx-auto max-w-[760px] border-x border-graylighter px-10 py-12 sm:px-12 md:px-20 md:py-14">
                   <div className="flex items-center gap-2 text-xs text-dark">
                       <CircleUserRound className="h-7 w-7 text-gray-300" aria-hidden="true" />
                       <span>{post.authorName}</span><span>•</span><span>{formatDate(post.dateISO)}</span><span>•</span><span>{post.readingTime}</span>
                       <EllipsisVertical className="ml-auto h-5 w-5" aria-label="Mais opções" />
                   </div>
                   {post.title ? (
                       <h1 className="mt-6 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
                           {post.title}
                       </h1>
                   ) : null}

                   <p className="mt-4 text-xs text-dark">Atualizado: 13 de mar. de 2023</p>

                   {(post.authorName || post.dateISO || post.readingTime) ? (
                       <div className="hidden">
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
                       <div className="mt-7 aspect-[2.18/1] w-full overflow-hidden bg-graylighter">
                           <img
                               src={post.coverUrl}
                               alt={post.title || "Capa do post"}
                               className="w-full h-full object-cover"
                           />
                       </div>
                   ) : null}

                   <div className="mt-7">
                       <div
                           className="max-w-none text-base leading-7 text-dark [&_a]:text-primary [&_a]:underline [&_h2]:mb-6 [&_h2]:mt-8 [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-bold [&_img]:mb-8 [&_img]:mt-8 [&_img]:w-full [&_img]:object-cover [&_li]:mb-1 [&_p]:mb-7 [&_strong]:font-bold [&_ul]:mb-7 [&_ul]:list-disc [&_ul]:pl-5"
                           dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                       />
                   </div>
                   <a href="/corporate#contato-corporate" className="mx-auto mt-9 flex min-h-10 w-fit items-center rounded-full bg-primary px-6 text-center text-xs font-medium text-white transition hover:bg-darkgreen">
                       Fale com a gente
                   </a>
                   <div className="mt-28">
                       <span className="border border-graylighter px-3 py-2 text-xs text-primary">soluções</span>
                       <a href="/corporate/blog" className="mt-6 block text-xs underline">Soluções</a>
                   </div>
                   <div className="mt-6 flex items-center gap-6 border-y border-graylighter py-4 text-sm text-dark">
                       <span className="font-bold">f</span><span>𝕏</span><span className="font-bold">in</span><Link2 className="h-4 w-4" aria-label="Copiar link" />
                   </div>
                   <p className="mt-5 text-xs text-dark">0 comentário</p>
               </div>
           </article>
           <RecentPosts posts={recentPosts} />
           <CommentsBox />
           <FooterCorporate />
       </div>
    );
}

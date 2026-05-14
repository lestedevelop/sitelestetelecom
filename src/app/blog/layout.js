import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";

export const metadata = {
  title: "Blog | Leste Telecom",
  description: "Conteudos, dicas e novidades da Leste Telecom",
};

export default function BlogLayout({children}) {
  return (
    <div className="bg-light text-[#5F5F5F] sm:pb-16 xl:pb-24">
      {/*<section className="w-full">*/}
      {/*  <HomeHeroBanner*/}
      {/*    alt="Banner Blog da Leste Telecom"*/}
      {/*    className="h-[182px] md:h-[350px]"*/}
      {/*    contentClassName="container flex flex-col justify-center text-light"*/}
      {/*  >*/}
      {/*    <div className="max-w-48 md:max-w-66">*/}
      {/*      <h1 className="mb-6 text-2xl font-bold md:text-[50px]">Blog</h1>*/}
      {/*      <p className="text-[13px] md:text-[26px]">Dicas e novidades para voce ficar conectado.</p>*/}
      {/*    </div>*/}
      {/*  </HomeHeroBanner>*/}
      {/*</section>*/}
      {children}
    </div>
  );
}

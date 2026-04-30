import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import SectionApp from "@/pageComponents/leste-suporte/SectionApp";

export default function LesteSuporte() {
  return (
    <div className="min-h-full ">
      <section className="w-full">
        <HomeHeroBanner
          alt="Banner da pagina Leste Suporte"
          className="h-[182px] md:h-[350px]"
          contentClassName="container flex h-full flex-col justify-center text-light"
        />
      </section>

      <SectionApp />
    </div>
  );
}

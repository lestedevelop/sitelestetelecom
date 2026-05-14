import Section from "@/components/layout/Section";
import PmePlansSwiper from "@/pageComponents/pme/PmePlansSwiper";
import {PME_PLANS} from "@/pageComponents/pme/pmePlansData";

export default function PmePlansSection() {
  return (
    <Section>
      <section className="pt-8 pb-8">
        <h2 className="text-center text-[28px] font-bold leading-[1.05] text-primary md:text-[64px]">
          Conheca nossos planos empresariais!
        </h2>
        <p className="mt-2 text-center text-base leading-[1.3] text-dark md:text-2xl">
          Internet 100% Fibra otica para o seu negocio
        </p>
      </section>

      <PmePlansSwiper plans={PME_PLANS} />

      <div className="pt-8 pb-8">
        <p className="mt-2 text-center text-xl font-bold leading-[1.3] text-darkgreen md:text-2xl">
          Planos empresariais sujeitos a viabilidade tecnica.
        </p>
        <div className="text-center">
          <p className="mx-2.5 mb-8 text-sm text-graylight lg:text-base">
            Todos os planos e servicos estao sujeitos a viabilidade tecnica. Consulte nosso FAQ para conhecer regras, condicoes e servicos agregados a cada plano.
          </p>
        </div>
      </div>

    </Section>
  );
}

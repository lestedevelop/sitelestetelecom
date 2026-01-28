import AppBar from "@/components/layout/AppBar";
import SectionBanner from "@/components/layout/SectionBanner";
import bannerSuporte from "@/assets/bannersuporte.png";
import Footer from "@/components/layout/Footer";

import SectionApp from "@/pageComponents/leste-suporte/SectionApp";

export default function LesteSuporte() {
  return (
      <div className="min-h-full">

        <section className="w-full">
            <SectionBanner className="bg-primary w-full h-[182px] md:h-[350px] " title={"Já conhece os\n" +
                "Apps da Leste?"} subtitle={"Confira abaixo."} image={bannerSuporte}
            />
        </section>
        <SectionApp />
      </div>
  );
}

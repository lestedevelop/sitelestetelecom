import HeroSlide from "@/pageComponents/home/HeroSlide";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import BannerIndique from "@/pageComponents/indique-e-ganhe-leste/BannerIndique";
import AppHighlight from "@/pageComponents/area-cliente/AppHighlight";
import CanaisAtendimentoClienteSection from "@/pageComponents/area-cliente/CanaisAtendimentoClienteSection";
import TireDuvidasSection from "@/pageComponents/area-cliente/TireDuvidasSection";
import WelcomeHelpSection from "@/pageComponents/area-cliente/WelcomeHelpSection";

export default function AreaDoClientePage() {
  return (
    <main className="min-h-full bg-light">
      <HeroSlide />
      <WelcomeHelpSection />
      <BannerIndique />
      <CanaisAtendimentoClienteSection />
      <AppHighlight variant="suporte" />
      <AppHighlight variant="central" />
      <NovidadesSection />
      <TireDuvidasSection />
    </main>
  );
}

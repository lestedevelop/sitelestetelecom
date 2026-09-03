import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import BannerIndique from "@/pageComponents/indique-e-ganhe-leste/BannerIndique";
import AppHighlight from "@/pageComponents/area-cliente/AppHighlight";
import AreaClienteHeroBanner from "@/pageComponents/area-cliente/AreaClienteHeroBanner";
import CanaisAtendimentoClienteSection from "@/pageComponents/area-cliente/CanaisAtendimentoClienteSection";
import TireDuvidasSection from "@/pageComponents/area-cliente/TireDuvidasSection";
import WelcomeHelpSection from "@/pageComponents/area-cliente/WelcomeHelpSection";

export default function AreaDoClientePage() {
  return (
    <main className="min-h-full bg-light">
      <AreaClienteHeroBanner />
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

import AmaisPremiadaDoEstado from "@/pageComponents/home/AmaisPremiadaDoEstado";
import ConhecaNossosServicosSection from "@/pageComponents/home/ConhecaNossosServicosSection";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import PmeHero from "@/pageComponents/pme/PmeHero";
import PmePlansSection from "@/pageComponents/pme/PmePlansSection";

export default function Pme() {
  return (
    <main className="min-h-full bg-light">
      <PmeHero />
      <PmePlansSection />
      <AmaisPremiadaDoEstado />
      <ConhecaNossosServicosSection />
      <NovidadesSection />
    </main>
  );
}

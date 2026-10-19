import LestePlayHero from "@/pageComponents/lesteplay/LestePlayHero";
import LestePlayPlans from "@/pageComponents/lesteplay/LestePlayPlans";

export const metadata = {
  title: "TV e streaming juntos | Leste Play",
  description: "Do jogo ao filme, encontre seu plano Leste Play.",
};

export default function LestePlayPage() {
  return (
    <div className="min-h-full bg-white">
      <LestePlayHero />
      <LestePlayPlans />
    </div>
  );
}

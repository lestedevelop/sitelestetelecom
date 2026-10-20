import LestePlayHero from "@/pageComponents/lesteplay/LestePlayHero";
import LestePlayActivation from "@/pageComponents/lesteplay/LestePlayActivation";
import LestePlayContents from "@/pageComponents/lesteplay/LestePlayContents";
import LestePlayDevices from "@/pageComponents/lesteplay/LestePlayDevices";
import LestePlayFinalCta from "@/pageComponents/lesteplay/LestePlayFinalCta";
import LestePlayHboMax from "@/pageComponents/lesteplay/LestePlayHboMax";
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
      <LestePlayContents />
      <LestePlayHboMax />
      <LestePlayDevices />
      <LestePlayActivation />
      <LestePlayFinalCta />
    </div>
  );
}

import LesteUpHero from "@/pageComponents/lesteup/LesteUpHero";
import LesteUpOverview from "@/pageComponents/lesteup/LesteUpOverview";
import LesteUpBenefits from "@/pageComponents/lesteup/LesteUpBenefits";
import LesteUpCta from "@/pageComponents/lesteup/LesteUpCta";
import LesteUpFaq from "@/pageComponents/lesteup/LesteUpFaq";

export default function LesteUpPage() {
  return (
    <div className="min-h-full bg-[#002f2b]">
      <LesteUpHero />
      <LesteUpOverview />
      <LesteUpBenefits />
      <LesteUpCta />
      <LesteUpFaq />
    </div>
  );
}

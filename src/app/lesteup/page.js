import LesteUpHero from "@/pageComponents/lesteup/LesteUpHero";
import LesteUpOverview from "@/pageComponents/lesteup/LesteUpOverview";
import LesteUpBenefits from "@/pageComponents/lesteup/LesteUpBenefits";
import LesteUpCta from "@/pageComponents/lesteup/LesteUpCta";
import LesteUpFaq from "@/pageComponents/lesteup/LesteUpFaq";

export default function LesteUpPage() {
  return (
    <div className="min-h-full bg-[#00786d] py-8 pb-8 sm:pb-12 lg:pb-24 xl:pb-48">
      <LesteUpHero />
      <LesteUpOverview />
      <LesteUpBenefits />
      <LesteUpCta />
      <LesteUpFaq />
    </div>
  );
}

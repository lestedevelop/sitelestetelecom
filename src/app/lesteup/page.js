import LesteUpHero from "@/pageComponents/lesteup/LesteUpHero";
import LesteUpOverview from "@/pageComponents/lesteup/LesteUpOverview";
import LesteUpBenefits from "@/pageComponents/lesteup/LesteUpBenefits";
import LesteUpCta from "@/pageComponents/lesteup/LesteUpCta";
import LesteUpFaq from "@/pageComponents/lesteup/LesteUpFaq";
import Image from "next/image";
import whatsIcon from "@/assets/whatsIcon.svg";
const WHATSAPP_URL = "https://wa.me/552120201300";


export default function LesteUpPage() {
  return (
    <div className="min-h-full bg-[#00786d] pb-8 sm:pb-12 lg:pb-24 xl:pb-48">
      <LesteUpHero />
      <LesteUpOverview />
      <LesteUpBenefits />
      <LesteUpCta />
      <LesteUpFaq />
    </div>
  );
}

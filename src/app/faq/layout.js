import SectionBanner from "@/components/layout/SectionBanner";
import bannerFaq from "@/assets/bannerfaq.png";

export const metadata = {
    title: "FAQ | Leste Telecom",
    description: "Leste Telecom",
};

export default function FaqLayout({ children }) {
    return (
        <div className="bg-white text-[#5F5F5F]">
            <section className="md:mt-[160px] mt-[90px] w-full">
                <SectionBanner className="bg-primary w-full h-[182px] md:h-[350px]" titleClassName={"text-7xl"} subtitleClassName={"text-[15px]"} title={"FAQ"} subtitle={"Tire suas dúvidas aqui.\n"} image={bannerFaq}
                />
            </section>
            {children}
        </div>
    );
}

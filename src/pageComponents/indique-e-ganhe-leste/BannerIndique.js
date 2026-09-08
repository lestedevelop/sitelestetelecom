import bannerIndique from "@/assets/banner-indique.png";
import bannerIndiqueMobile from "@/assets/banner-indique-mobile.png";
import bannerIndiqueTablet from "@/assets/banner-indique-tablet.png";
import IndiqueHeroBanner from "@/pageComponents/indique-e-ganhe-leste/IndiqueHeroBanner";
import BannerHome from "@/pageComponents/home/BannerHome";

function StaticBannerIndique() {
    return (
        <section className="w-full bg-lightgreenBackground md:py-16">
            <div className="md:container">
                <IndiqueHeroBanner
                    href="/indique-e-ganhe-leste"
                    alt="Indique e Ganhe. Quer mais desconto? Indica a Leste! Participe da promocao."
                    className="aspect-[390/608] md:aspect-[1024/512] md:rounded-3xl lg:aspect-[1440/400]"
                    desktopImage={bannerIndique}
                    tabletImage={bannerIndiqueTablet}
                    mobileImage={bannerIndiqueMobile}
                    priority
                />
            </div>
        </section>
    );
}

export default function BannerIndique() {
    return (
        <BannerHome
            sectionKey="indiqueGanheBanner"
            fallback={<StaticBannerIndique/>}
            alt="Indique e Ganhe"
            className="aspect-[390/608] md:aspect-[1024/512] lg:aspect-[1440/400]"
            desktopImageClassName="2xl:object-cover"
            mobileImageClassName="object-cover"
        />
    );
}

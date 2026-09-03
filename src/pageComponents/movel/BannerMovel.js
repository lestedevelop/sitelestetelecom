import Image from "next/image";
import bannerDesktop from "@/assets/movel/banner-03-09-2026.png";
import bannerMobile from "@/assets/movel/banner-03-09-2026-mobile.png";

export default function BannerMovel() {
    return (
        <section className="mt-[88px] w-full bg-darkgreen md:mt-[123px]">
            <Image
                src={bannerMobile}
                alt="Leste Móvel: plano de 17 GB por R$ 49,99 por mês"
                className="block h-auto w-full md:hidden"
                sizes="100vw"
                priority
            />
            <Image
                src={bannerDesktop}
                alt="Leste Móvel: plano de 17 GB por R$ 49,99 por mês"
                className="hidden h-auto w-full md:block"
                sizes="100vw"
                priority
            />
        </section>
    );
}

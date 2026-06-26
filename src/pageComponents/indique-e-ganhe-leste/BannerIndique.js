import Image from "next/image";
import Link from "next/link";
import bannerIndique from "@/assets/banner-indique.png";

export default function BannerIndique() {
    return (
        <section className="w-full bg-lightgreenBackground py-10 md:py-16">
            <div className="container">
                <Link href="/indique-e-ganhe-leste" className="block overflow-hidden rounded-3xl">
                    <Image
                        src={bannerIndique}
                        alt="Indique e Ganhe. Quer mais desconto? Indica a Leste! Participe da promoção."
                        className="h-auto w-full"
                        priority
                    />
                </Link>
            </div>
        </section>
    );
}

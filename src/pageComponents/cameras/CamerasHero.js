import Image from "next/image";
import banner from "@/assets/cameras/bannercameras.webp";
import bannerMobile from "@/assets/cameras/banner-mobile.webp";
import logo from "@/assets/cameras/logocameras.webp";
import whatsIcon from "@/assets/whatsIcon.svg";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";

const CAMERAS_WHATSAPP_URL = "https://bit.ly/4khdcOO";

export default function CamerasHero() {
  return (
    <section className="w-full">
      <HomeHeroBanner
        alt="Banner de câmeras"
        priority
        className="h-[560px] bg-[#003934] md:h-[350px] lg:h-[460px] xl:h-[520px]"
        contentClassName="flex items-center"
        desktopImage={banner}
        tabletImage={banner}
        mobileImage={bannerMobile}
        desktopImageClassName="2xl:object-cover"
      >
        <div className="container px-8 md:px-16">
          <div className="max-w-[280px] rounded-2xl bg-primary/95 p-4 shadow-md md:max-w-md md:bg-transparent md:p-0 md:shadow-none">
            <div className="w-[140px] md:w-[200px]">
              <Image
                src={logo}
                alt="Leste Câmeras"
                className="h-auto w-full"
                priority
              />
            </div>

            <h1 className="mt-4 text-2xl font-semibold leading-tight text-white md:mt-6 md:text-4xl">
              Acompanhe
              <br />
              quem você ama
              <br />
              em <span className="text-lightgreen">tempo real.</span>
            </h1>

            <a
              href={CAMERAS_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-lightgreen px-5 py-2 text-sm font-semibold text-darkgreen transition hover:opacity-90 md:px-6 md:py-2.5 md:text-base"
            >
              <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
              Contrate agora!
            </a>
          </div>
        </div>
      </HomeHeroBanner>
    </section>
  );
}

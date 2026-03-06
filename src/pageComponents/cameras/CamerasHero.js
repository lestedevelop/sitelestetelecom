import Image from "next/image";
import banner from "@/assets/cameras/bannercameras.png";
import bannerMobile from "@/assets/cameras/banner-mobile.png";
import logo from "@/assets/cameras/logocameras.png";
import whatsIcon from "@/assets/whatsIcon.svg";

export default function CamerasHero() {
  return (
    <section className="w-full">
      <div className="container py-6 md:py-10">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src={bannerMobile}
            alt="Banner de cameras"
            className="h-auto w-full md:hidden"
            priority
          />
          <Image
            src={banner}
            alt="Banner de cameras"
            className="hidden h-auto w-full md:block"
            priority
          />

          <div className="absolute inset-0 hidden md:block">
            <div className="flex h-full items-center px-4 py-4 md:items-start md:px-12 md:py-10">
              <div className="w-full max-w-[280px] rounded-2xl bg-primary/95 p-4 shadow-md md:max-w-md md:bg-transparent md:p-0 md:shadow-none">
                <div className="w-[140px] md:w-[200px]">
                  <Image
                    src={logo}
                    alt="Leste Cameras"
                    className="h-auto w-full"
                    priority
                  />
                </div>

                <h1 className="mt-4 text-xl font-semibold leading-tight text-white md:mt-6 md:text-4xl">
                  Acompanhe
                  <br />
                  quem voce ama
                  <br />
                  em <span className="text-lightgreen">tempo real.</span>
                </h1>

                <a
                  href="https://wa.me/552120201300"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-lightgreen px-4 py-2 text-sm font-semibold text-darkgreen transition hover:opacity-90 md:px-6 md:py-2.5 md:text-base"
                >
                  <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                  Contrate agora!
                </a>
              </div>
            </div>
          </div>
          <div className="absolute left-[50%] -translate-x-1/2 bottom-0 md:hidden">
            <div className="flex flex-col min-w-50 h-[480px] gap-y-[128px] items-center justify-between py-12 w-screen px-12">
              <h1 className="text-2xl w-full font-semibold leading-tight text-white">
                Acompanhe quem voce ama em <span className="text-lightgreen">tempo real.</span>
              </h1>
              <a
                  href="https://wa.me/552120201300"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-lightgreen px-5 py-2 text-sm font-semibold text-darkgreen transition hover:opacity-90"
              >
                <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                Contrate agora!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import CardApp from "@/components/cards/CardApp";
import arrow from "@/assets/arrowright.svg";
import arrow2 from "@/assets/arrowrightlight.svg";
import bannerSuporteApp from "@/assets/app/mockup-app.png";
import bannerSuporteApp2 from "@/assets/app/mockup-app2.png";

function BulletItem({ children, light = false }) {
  return (
    <li className="flex items-start gap-3 md:gap-4">
      <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${light? "bg-light" : "bg-darkgreen" } md:h-[34px] md:w-[34px]`}>
        {light && <Image src={arrow2} alt="icon" className="ml-3 w-3 md:w-5 stroke-primary"/>}
        {!light && <Image src={arrow} alt="icon" className="ml-3 w-3 md:w-5 stroke-primary"/>}
      </div>
      <p className={`text-sm leading-5 md:text-xl md:leading-7 ${light ? "text-light" : "text-primary"}`}>
        {children}
      </p>
    </li>
  );
}

export default function SectionApp() {
  return (
    <div className="w-full">
      <section className="bg-light">
        <div className="container flex w-full flex-col justify-between gap-10 py-12 md:min-h-[760px] md:gap-14 md:py-16 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="text-primary">
            <CardApp suporte className="mx-auto lg:mx-0" />

            <div className="flex flex-col gap-y-3 py-6 text-center md:gap-y-4 md:py-8 lg:text-left">
              <h3 className="text-[28px] font-bold leading-[1.05] md:text-[40px]">
                Problema de conexao?
              </h3>
              <h4 className="text-base md:text-[25px]">
                Conheca o <span className="font-bold">Leste Suporte!</span>
              </h4>
              <p className="text-base font-bold md:text-xl">Resolva problema como:</p>
            </div>

            <ul className="mx-auto flex max-w-[420px] flex-col gap-y-4 md:gap-y-6 lg:mx-0">
              <BulletItem>Problemas com a cobertura Wi-Fi</BulletItem>
              <BulletItem>Videos bufferizado</BulletItem>
              <BulletItem>Lentidao</BulletItem>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6 md:gap-y-8">
            <div className="mx-auto w-full max-w-[640px]">
              <Image
                alt="banner do app Leste Suporte"
                src={bannerSuporteApp}
                className="h-auto w-full"
              />
            </div>
            <CardApp
              download
              link="https://onelink.to/lestesuporte"
              className="mx-auto w-full max-w-[640px] bg-primary"
            />
          </div>
        </div>
      </section>

      <section className="translate-y-10 lg:translate-y-24 bg-primary pb-12 2xl:translate-y-38 2xl:pb-24">
        <div className="container flex min-h-screen w-full flex-col justify-between gap-10 py-12 md:min-h-[760px] md:gap-14 md:py-16 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="order-2 text-light lg:order-1">
            <CardApp central className="mx-auto lg:mx-0" />

            <div className="flex flex-col gap-y-3 py-6 text-center md:gap-y-4 md:py-8 lg:text-left">
              <h3 className="text-[28px] font-bold leading-[1.05] md:text-[40px]">
                Boleto na palma da sua mao.
              </h3>
              <h4 className="text-base md:text-[25px]">
                O app <span className="font-bold">Leste Central</span> e muito
                <span className="font-bold"> pratico e facil</span>
              </h4>
              <p className="text-base font-bold md:text-xl">
                Nele voce consegue ter acesso a:
              </p>
            </div>

            <ul className="mx-auto flex max-w-[480px] flex-col gap-y-4 md:gap-y-6 lg:mx-0">
              <BulletItem light>2 via do seu boleto</BulletItem>
              <BulletItem light>
                Avisos de manutencao
                <br className="hidden md:block" /> e ocorrencias
              </BulletItem>
              <BulletItem light>
                Todas as formas de contato e
                <br className="hidden md:block" /> redes sociais da Leste
              </BulletItem>
            </ul>
          </div>

          <div className="order-1 flex flex-col gap-y-6 md:gap-y-8 lg:order-2">
            <CardApp
              download
              link="https://onelink.to/lestecentral"
              className="mx-auto w-full max-w-[640px] bg-light text-primary"
            />
            <div className="mx-auto w-full max-w-[640px]">
              <Image
                alt="banner do app Leste Central"
                src={bannerSuporteApp2}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import AppBar from "@/components/layout/AppBar";
import SectionBanner from "@/components/layout/SectionBanner";
import Footer from "@/components/layout/Footer";
import bannerViabilidades from "@/assets/areaCobertura.png";
import CardBanner from "@/components/cards/CardBanner";
import bannerAssineOnline from "@/assets/cardBanner.png";

export default function Faq() {
  return (
      <div className="min-h-full">
        <section className="w-full">
            <SectionBanner className="bg-primary w-full h-[182px] md:h-[350px]" subtitleClassName={"text-[13px] md:text-[20px]! md:w-80"}  title={"Área de Cobertura\n"} subtitle={"Selecione sua cidade e confira se sua região é atendida.\n"} image={bannerViabilidades}/>
        </section>

          <section className={"w-full bg-light h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Maricá</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1FcFZ9oePcOtszHmhihToLnW0saEO8r1s&ehbc=2E312F" className={"w-full h-124"} ></iframe>
              </div>
          </section>
          <section className={"w-full bg-graylighter h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Itaboraí</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=14OUplhRNgUhZstxc_RK3ajyhGZpbOT-4&ehbc=2E312F" className={"w-full h-124"} ></iframe>
              </div>
          </section>
          <section className={"w-full bg-light h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Magé - Guapimirim</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1t-ue4h-PF9FXfIYRZxwYVGUh0Kk_ErXp&ehbc=2E312F" className={"w-full h-124"}></iframe>
              </div>
          </section>
          <section className={"w-full bg-graylighter h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Rio Bonito</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1gEwJkjND0VLHspPrXtOkGyKXx9qqQyxB&ehbc=2E312F" className={"w-full h-124"}></iframe>
              </div>
          </section>
          <section className={"w-full bg-light h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Tanguá</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=13CW59f8ouV2ffOlI8IneXPZGi-izkYvo&ehbc=2E312F" className={"w-full h-124"}></iframe>
              </div>
          </section>
          <section className={"w-full bg-graylighter h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Niterói Região Central</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=14QJsM7vK0PXtCmd3wbJb6jRY8VzQuGQ&ehbc=2E312F" className={"w-full h-124"}></iframe>
              </div>
          </section>
          <section className={"w-full bg-light h-full py-6"}>
              <div className={"container h-160"}>
                  <h3 className={"font-bold text-[32px] text-primary py-6"}>Niterói Região Oceânica</h3>
                  <iframe src="https://www.google.com/maps/d/embed?mid=1vd6MVzgZ7BVKM6yA-_RwdAY_s1z2-o-o&ehbc=2E312F" className={"w-full h-124"}></iframe>
              </div>
          </section>
          <CardBanner className={"py-10 pb-0 md:py-20"} image={bannerAssineOnline} title={"Vem para o melhor caminho!"} buttonText={"Assine Online"} link={"https://vendas.lestetelecom.com.br/"} />

      </div>
  );
}

import AppBar from "@/components/layout/AppBar";
import SectionBanner from "@/components/layout/SectionBanner";
import Footer from "@/components/layout/Footer";
import ActionButton from "@/components/Buttons/ActionButton";
import PlanCardEmp from "@/components/cards/PlanCardEmp";

export default function Pme() {

    const plans = [
        {
            titleNumber: "600",
            titleUnit: "MEGA",
            wifiText: "SUPER WI-FI 6",
            price: 300.00,
            cta: "Assinar agora",
        },
        {
            titleNumber: "800",
            titleUnit: "MEGA",
            wifiText: "SUPER WI-FI 6",
            price: 500.00,
            cta: "Assinar agora",
        },
        {
            titleNumber: "1",
            titleUnit: "GIGA",
            wifiText: "SUPER WI-FI 6",
            price: 700.00,
            cta: "Assinar agora",
        }]



    return (
      <div className="min-h-full">
        <section className="">
            <SectionBanner
                imageClassName={"objet-cover"}
                titleClassName={"w-64 md:w-144 text-2xl! md:text-[65px]! font-light"}
                className="bg-primary w-full py-8 min-h-45 md:h-125 bg-[url('/trabalheconosco.png')] bg-cover bg-no-repeat md:bg-cover bg-center"
                title={"Mais que internet, é parceria no seu negócio!"}
                subtitle={<ActionButton className={"bg-light rounded-full! text-darkgreen w-25! md:w-60! text-xs md:text-2xl"}>Assine agora!</ActionButton>}
            />
        </section>
          <section className="flex flex-col container gap-8 items-center justify-center text-center min-h-screen md:min-h-[720px] py-8 md:py-8">
              <h3 className={"text-darkgreen text-2xl md:text-[40px] font-bold"}>Conheça nossos planos empresariais!</h3>
                  <div className={"flex flex-wrap items-center justify-center gap-8 w-full"}>
                      <PlanCardEmp plan={plans[0]} className={""}/>
                      <PlanCardEmp plan={plans[1]} className={""}/>
                      <PlanCardEmp plan={plans[2]} className={""}/>
                  </div>
                  <p className={"text-graylight font-[13px]"}>*Consulte nosso FAQ para maiores informações, regras e condições gerais de venda dos planos ofertados.</p>
          </section>
      </div>
  );
}

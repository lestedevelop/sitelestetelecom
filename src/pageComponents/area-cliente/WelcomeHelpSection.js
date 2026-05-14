import ClientActionCard from "@/pageComponents/area-cliente/ClientActionCard";
import {CLIENT_ACTIONS} from "@/pageComponents/area-cliente/areaClienteData";

export default function WelcomeHelpSection() {
  return (
    <section className="bg-primary py-12 md:bg-light md:py-16">
      <div className="container">
        <div className="max-w-[720px]">
          <h1 className="text-center text-[28px] font-bold leading-[0.98] tracking-[-0.04em] text-light md:text-left md:text-6xl md:text-primary">
            Bem vindo a area de
            <br />
            cliente da Leste
          </h1>
          <p className="mt-3 hidden text-2xl font-bold text-darkgreen md:block md:text-[2rem]">
            Como Podemos ajudar?
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENT_ACTIONS.map((item) => (
            <ClientActionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

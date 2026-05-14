import ChannelCard from "@/pageComponents/area-cliente/ChannelCard";
import {SERVICE_CHANNELS} from "@/pageComponents/area-cliente/areaClienteData";

export default function CanaisAtendimentoClienteSection() {
  return (
    <section className="bg-light py-14 md:py-18">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[2.8rem] font-bold leading-none tracking-[-0.04em] text-primary md:text-[4rem]">
            Canais de Atendimento
          </h2>
          <p className="mt-3 text-xl text-darkgreen md:text-[1.6rem]">
            Diversos canais de atendimento para melhor te atender!
          </p>
        </div>

        <div className="container mx-auto mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {SERVICE_CHANNELS.map((item) => (
            <ChannelCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

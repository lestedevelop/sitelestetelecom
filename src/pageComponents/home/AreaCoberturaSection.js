import Section from "@/components/layout/Section";
import { Title } from "@/components/typoraphy";
import areaCobertura from "@/assets/areaCobertura.png"

export default function AreaCoberturaSection() {
  return (
  <div className="bg-primary md:bg-contain bg-cover" style={{
      backgroundImage: `url(${areaCobertura.src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // width: '100%',
      height: '293px',
      boxSizing: 'border-box'
    }}>
      <Section 
    >
      <div className="text-white h-[293px] flex justify-center flex-col ">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Área de Cobertura
        </h2>
        <p className="hidden md:block text-base text-[20px] mb-6">
          Selecione sua cidade e confira <br /> se sua região é atendida.
        </p>
        <a href="#" className="w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition">
          Consultar!
        </a>
      </div>

    </Section>
  </div>
  )
}
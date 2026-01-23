import Section from "@/components/layout/Section";
import Link from "next/link";
import areaCobertura from "@/assets/areaCobertura.png"

export default function AreaCoberturaSection() {
  return (
  <div className="relative h-[293px] bg-primary">
    <div
      className="absolute inset-0 hidden md:block bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${areaCobertura.src})` }}
    />
    <div
      className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/areaCoberturaMobile.png)" }}
    />
      <Section 
    >
      <div className="relative z-10 text-white h-[293px] flex justify-center flex-col ">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Área de Cobertura
        </h2>
        <p className="hidden md:block text-base text-[20px] mb-6">
          Selecione sua cidade e confira <br /> se sua região é atendida.
        </p>
        <Link href="/viabilidade" className="w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition">
          Consultar!
        </Link>
      </div>

    </Section>
  </div>
  )
}

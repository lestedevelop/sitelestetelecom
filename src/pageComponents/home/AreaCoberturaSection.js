import Section from "@/components/layout/Section";
import {Title} from "@/components/typoraphy";
import areaCobertura from "@/assets/areaCobertura.png"

export default function AreaCoberturaSection(){
    return (
        <Section  style={{
      backgroundImage: `url(${areaCobertura.src})`,
      backgroundSize: 'cover',          
      backgroundPosition: 'center',     
      backgroundRepeat: 'no-repeat',    
      width: '100%',                    
      height: '400px',
      boxSizing: 'border-box'        
    }}>
     <div className="p-6 rounded-lg text-white mt-10 flex justify-center flex-col ">
      <h2 className="text-4xl font-bold mb-4">
        Área de Cobertura
      </h2>
      <p className="text-base text-[20px] mb-6">
        Selecione sua cidade e confira <br/> se sua região é atendida.
      </p>
      <a href="#" className="w-60 py-3 font-semibold text-2xl text-center rounded-xl bg-[#045441] hover:opacity-90 transition">
        Consultar!
      </a>
    </div>
           
        </Section>
    )
}
'use-client'
import Section from "@/components/layout/Section";
import bannerLeste from "@/assets/LesteUltraBanner.png"
import melhorCaminho from "@/assets/melhor_caminho.png"
import LogoLesteBranco from "@/assets/lestelogocapabranco.png"
import Image from "next/image";
import VelocidadeBanner from "@/components/typoraphy/SloganTitle";
import BotaoSaibaMais from "@/components/Buttons/ButtonGoTo";


export default function MelhorCaminhoSection() {
    return (
        <Section>
            <div
        className="relative w-full max-w-7xl h-[300px] rounded-3xl overflow-hidden flex items-stretch"
      >
        {/* imagem de fundo */}
        <Image
          src={melhorCaminho}
          alt="Casal feliz usando tablet"
          fill
          className="object-cover"
        />

        {/* camada de gradiente sobre a imagem */}

        {/* conteúdo do texto e botão */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-white max-w-[50%]">
          <h1 className="text-4xl font-bold leading-snug mb-6">
            Vem para o <br /> melhor caminho!
          </h1>

          <a
            href="#"
            className="bg-[#024c3d] text-white text-xl font-semibold px-10 py-3 rounded-xl w-fit hover:bg-[#013c31] transition"
          >
            Assine online
          </a>
        </div>
      </div>


        </Section>
    )
}
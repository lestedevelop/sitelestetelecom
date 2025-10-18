import Section from "@/components/layout/Section";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import { Title } from "@/components/typoraphy";
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg"
import localicazao from "@/assets/Localizacao.svg"
import canaisAtendimento from "@/assets/canais_de atendimento.jpg"
import telefone from "@/assets/Telefone.svg"
import faqImg from "@/assets/FAQ.svg"
import atendimentoImg from "@/assets/Atendimento.svg"
import ActionCard from "@/components/listItems/ActionCard";
import Image from "next/image";
import MelhorCaminhoSection from "./MelhorCaminhoSection";



export default function CanaisAtendimentosSection() {
    return (
        <Section>
            <div className="flex mt-10 items-stretch gap-8">
                <div className="flex flex-col justify-between flex-1">
                    <TitleAndSubtitleSection
                        title="Canais de atendimento"
                        text={
                            <p>
                                Diversos canais de atendimento para <br /> melhor te atender!
                            </p>
                        }
                    />

                    <div className=" flex-col mt-3">
                        <div className="sm:flex-col md:flex-row md:flex md:gap-3">
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Problemas de conexão"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoIcon} />}
                            />
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Teste sua velocidade!"
                                icon={<Image alt="icone de velocidade" width={35} src={localicazao} />}
                            />
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Upgrade de plano"
                                icon={<Image alt="icone de conexao" width={35} src={telefone} />}
                            />
                        </div>

                        <div className="flex gap-3 mt-4">
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Problemas de conexão"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoIcon} />}
                            />
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Teste sua velocidade!"
                                icon={<Image alt="icone de velocidade" width={35} src={faqImg} />}
                            />
                            <ActionCard
                                textStyle={{ color: "#045441" }}
                                text="Upgrade de plano"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoImg} />}
                            />
                        </div>
                    </div>
                </div>

                <Image

                    className="w-full h-full object-contain rounded-2xl mt-9 hidden md:block "
                    src={canaisAtendimento}
                    alt="Canais de atendimento"
                />
            </div>

            <div className="mt-20">
                <MelhorCaminhoSection />
            </div>

        </Section>
    )
}
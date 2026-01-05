import Image from "next/image";
import Section from "@/components/layout/Section";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg"
import localicazao from "@/assets/Localizacao.svg"
import telefone from "@/assets/Telefone.svg"
import faqImg from "@/assets/FAQ.svg"
import atendimentoImg from "@/assets/Atendimento.svg"
import ActionCard from "@/components/listItems/ActionCard";
import canaisAtendimento from "@/assets/canaisatendimento.jpg"


export default function CanaisAtendimentosSection() {
    return (
        <Section>
            <div className="flex mt-10 items-stretch gap-8">
                <div className="flex flex-col justify-between md:text-left text-center flex-1">
                    <TitleAndSubtitleSection
                        title="Canais de atendimento"
                        text={<>Diversos canais de atendimento para <br /> melhor te atender!</>}
                    />

                    <div className="grid md:grid-cols-3 grid-cols-1 w-full h-full">
                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Problemas de conexão"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoIcon} />}
                            />
                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Teste sua velocidade!"
                                icon={<Image alt="icone de velocidade" width={35} src={localicazao} />}
                            />
                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Upgrade de plano"
                                icon={<Image alt="icone de conexao" width={35} src={telefone} />}
                            />

                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Problemas de conexão"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoIcon} />}
                            />
                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Teste sua velocidade!"
                                icon={<Image alt="icone de velocidade" width={35} src={faqImg} />}
                            />
                            <ActionCard
                                className={""}
                                textStyle={{ color: "#045441" }}
                                text="Upgrade de plano"
                                icon={<Image alt="icone de conexao" width={35} src={atendimentoImg} />}
                            />
                    </div>
                </div>

                <Image

                    className="max-w-[435px] object-contain rounded-2xl mt-9 hidden md:block "
                    src={canaisAtendimento}
                    alt="Canais de atendimento"
                />
            </div>

        </Section>
    )
}
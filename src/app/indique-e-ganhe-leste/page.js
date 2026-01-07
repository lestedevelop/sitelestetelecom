import Image from "next/image";
import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import imageIndicacao from "@/assets/indicacao.jpg";
import FormIndicate from "@/components/Form/FormIndicate";
import FormCompleto from "@/components/Form/FormCompleto";

export default function IndiqueEGanheLestePage() {
    return (
        <div className="min-h-full bg-light">
            <AppBar/>
            <section className={"mt-[90px] md:mt-[161px] bg-[url('/indiqueeganha-mobile.png')] md:bg-[url('/indiqueeganhe.png')] bg-cover bg-center"}>
                <div className={"container flex flex-col md:flex-row md:justify-between min-h-[80vh] md:min-h-full py-12 md:py-24"}>
                    <div className={'md:w-1/2'}>
                        <h3 className={"text-[40px]/10 md:text-[70px]/16 font-bold"}>Indique <br/>e ganhe!</h3>
                        <p className={"text-[13px] md:text-[20px] py-4 md:py-8"}> Ao indicar um amigo e ele assinar, você ganha
                            a próxima mensalidade grátis</p>
                    </div>
                    <div className={"md:w-1/2"}>
                        <FormIndicate />
                    </div>
                </div>
            </section>

            <section className="">
                <div className={"container w-full flex flex-col gap-y-8 md:flex-row py-0 pb-8 md:py-12 items-start justify-between"}>
                    <div className="text-primary bg-light">
                        <h3 className={"text-[33px] md:text-[40px] font-bold py-8"}>Para participar é fácil!</h3>
                        <ul className="w-full flex flex-col gap-y-8">
                            <li className="flex items-center gap-x-4 shrink-0">
                                <div
                                    className={"rounded-full bg-darkgreen flex items-center justify-center min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]"}>
                                    <p className={"text-light text-[22px] md:text-[35px] font-[helvetica] text-bold"}>1</p>
                                </div>
                                <p className={"text-xs md:text-[22px] text-darkgreen"}><span className={"font-bold"}>Preencha o formulário acima </span><br/>com
                                    seus dados e do seu amigo.</p>
                            </li>
                            <li className="flex items-center gap-x-4 shrink-0">
                                <div
                                    className={"rounded-full bg-darkgreen flex items-center justify-center min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]"}>
                                    <p className={"text-light text-[22px] md:text-[35px] font-[helvetica] text-bold"}>2</p>
                                </div>
                                <p className={"text-xs md:text-[22px] text-darkgreen font-bold"}>Aguarde seu amigo assinar.</p>
                            </li>
                            <li className="flex items-center gap-x-4 shrink-0">
                                <div
                                    className={"rounded-full bg-darkgreen flex items-center justify-center min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]"}>
                                    <p className={"text-light text-[22px] md:text-[35px] font-[helvetica] text-bold"}>3</p>
                                </div>
                                <p className={"text-xs md:text-[22px] text-darkgreen"}>Após seu amigo realizar o <span
                                    className={"font-bold"}>pagamento
                                  da primeira mensalidade</span> você ganhará a <span className={"font-bold"}>mensalidade grátis</span> na
                                    próxima fatura.</p>
                            </li>
                            <li className="flex items-center gap-x-4 shrink-0">
                                <div
                                    className={"rounded-full bg-darkgreen flex items-center justify-center min-w-[40px] h-[40px] md:min-w-[60px] md:h-[60px]"}>
                                    <p className={"text-light text-[22px] md:text-[35px] font-[helvetica] text-bold"}>4</p>
                                </div>
                                <p className={"text-xs md:text-[22px] text-darkgreen"}>
                                    <span className={"font-bold"}>Pronto!</span> No próximo mês
                                    <span className={"font-bold"}>você não pagará</span>a mensalidade!
                                </p>
                            </li>
                        </ul>
                    </div>
                    <Image alt={"banner"} src={imageIndicacao} className={"max-w-full rounded-2xl md:max-w-[447px]"}/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

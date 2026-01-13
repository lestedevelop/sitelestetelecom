import Image from "next/image";
import promo2 from "@/assets/icons/promo2.svg"
import link from "@/assets/icons/link.svg"

export default function CadastreSeuEstabelecimento(){
    return (
        <section className={"bg-primary py-12 md:p-0 md:h-[485px] bg-[url('/waves.png')] bg-center overflow-hidden"}>
            <div className={"flex container items-start md:items-center justify-between h-full"}>
                <div className={"w-128 flex flex-col gap-y-8"}>
                    <h4 className={"text-xl md:text-4xl font-bold"}>Cadastre seu estabelecimento no nosso clube de vantagens!</h4>
                    <p className={"text-[13px] md:text-2xl"}>Inscreva a sua loja, seja divulgado para toda a nossa base e aumente as suas vendas!</p>
                    <a className={"bg-darkgreen md:text-xl text-xs flex max-w-64 justify-around py-2 rounded"} href={"https://leste.partiu.com.br/cadastrar-loja"}>Cadastra-se agora! <Image src={link} alt={""} /></a>
                </div>
                <Image src={promo2} alt={""} className={"translate-x-10 md:translate-x-0 w-30 h-30 md:w-64 md:h-64"} />
            </div>
        </section>
    )
}
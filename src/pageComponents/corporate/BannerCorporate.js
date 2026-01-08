'use client'
import {scrollToSection} from "@/utils/scrollToSection";

export default function BannerCorporate() {
    return (
        <section
            className="mt-[120px] md:mt-[155px] w-full bg-[url('/bannercorporate-mobile.png')] md:bg-[url('/bannercoporate.png')] bg-cover bg-no-repeat bg-center md:bg-top">
            <div className={"relative container text-light py-12 md:py-0 md:min-h-145 grid grid-cols-1"}>
                <div className="md:w-1/2 flex flex-col justify-center items-left md:justify-around gap-4 md:gap-8">
                    <div>
                        <h3 className={"text-white font-bold md:text-[50px]/14 text-xl"}>Soluções que <br/> <span
                            className={"text-[#64f7d7]"}>impulsionam</span> <br/>o seu negócio</h3>
                        <p className={"text-[10px] md:text-[24px]/8 py-4"}>
                            A Leste Corporate traz qualidade com as <span
                            className={"font-bold"}>melhores soluções</span> em internet!
                        </p>
                    </div>
                    <button onClick={() => scrollToSection("contato-corporate", 80)}
                           className={`w-64 py-3 font-semibold text-md md:text-2xl text-dark border text-center rounded-xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                            Fale Conosco!
                    </button>
                </div>
            </div>
        </section>
    )
}
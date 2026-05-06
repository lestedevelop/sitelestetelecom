import Image from "next/image";
import Link from "next/link";
import bannerCorporate from "@/assets/bannercoporate.webp";

export default function PmeHero() {
  return (
    <section className="w-full bg-primary">
      <div className="relative min-h-[430px] overflow-hidden md:min-h-[520px]">
        <Image
          src={bannerCorporate}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,84,65,.92)_0%,rgba(0,147,115,.62)_48%,rgba(0,147,115,.18)_100%)]" />

        <div className="container relative z-10 flex min-h-[430px] items-center md:min-h-[520px]">
          <div className="max-w-[720px] py-16 text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/80">
              Para empresas
            </p>
            <h1 className="text-[3rem] font-bold leading-[0.98] tracking-[-0.05em] md:text-[5.5rem]">
              Mais que internet, parceria para o seu negocio.
            </h1>
            <p className="mt-5 max-w-[520px] text-xl leading-7 text-white/88 md:text-2xl">
              Planos empresariais com fibra otica, estabilidade e suporte para sua operacao continuar conectada.
            </p>
            <Link
              href="/vendas"
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-xl font-bold text-primary transition hover:-translate-y-px hover:bg-light"
            >
              Assine agora!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

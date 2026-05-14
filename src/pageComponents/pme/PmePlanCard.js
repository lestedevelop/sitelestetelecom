import Image from "next/image";
import Link from "next/link";
import {formatPrice} from "@/utils/Format";
import alertIcon from "@/assets/vendas/icons/alert.svg";
import wifi6axIcon from "@/assets/vendas/icons/wifi-6ax.svg";

export default function PmePlanCard({plan}) {
  const {inteiro, centavos} = formatPrice(plan?.price);

  return (
    <article className="relative mx-auto w-full max-w-[330px] py-12 -mt-12">
      <div className="flex min-h-[560px] flex-col items-center justify-between rounded-3xl border border-primary bg-white px-6 pb-8 shadow-lg ring-1 ring-black/5">
        <div className="mt-6 text-8xl font-semibold leading-none text-primary">
          {plan.titleNumber}
        </div>

        <div className="-mt-2 text-5xl font-semibold uppercase tracking-[0.15em] text-primary">
          {plan.titleUnit}
        </div>

        <Image src={wifi6axIcon} alt={plan.wifiText} width={181} />

        <div className="flex items-end py-2 font-bold text-darkgreen">
          <span className="mr-1 flex flex-col">
            <span className="mt-6 text-base">Por</span>
            <span className="mb-2 mr-1 text-base">R$</span>
          </span>
          <span className="text-7xl leading-none">{inteiro}</span>
          <span className="flex flex-col">
            <span className="text-lg">,{centavos}</span>
            <span className="mb-2 ml-1 mt-2 text-sm">/Mes</span>
          </span>
        </div>

        <div className="w-full space-y-2">
          <Link
            href="/vendas"
            className="block w-full rounded-2xl border border-darkgreen bg-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-darkgreen"
          >
            Assine agora!
          </Link>

          <Link
            href="/faq"
            className="block w-full rounded-2xl border border-darkgreen bg-light px-4 py-2 text-center font-semibold text-darkgreen transition hover:bg-lightgreenBackground"
          >
            Mais Detalhes
          </Link>
        </div>

        {plan.badge ? (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <span className="flex w-60 items-center justify-center gap-2 rounded-2xl border border-primary bg-white px-3 py-2 text-xs font-semibold text-primary shadow">
              <Image src={alertIcon} alt="" width={14} height={14} />
              <span>{plan.badge}</span>
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

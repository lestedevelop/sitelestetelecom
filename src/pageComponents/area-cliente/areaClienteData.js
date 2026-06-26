import boletoIcon from "@/assets/area-do-cliente/fatura.svg";
import velocidadeIcon from "@/assets/area-do-cliente/testevelocidade.svg";
import conexaoIcon from "@/assets/area-do-cliente/conexao.svg";
import roteadorIcon from "@/assets/area-do-cliente/upgrade.svg";
import autoatendimentoIcon from "@/assets/area-do-cliente/autoatendimento.svg";
import lojasIcon from "@/assets/area-do-cliente/lojas.svg";
import centralIcon from "@/assets/area-do-cliente/central24.svg";

export const CLIENT_ACTIONS = [
  {
    title: "Gerar 2° via da fatura",
    href: "https://onelink.to/lestecentral",
    icon: boletoIcon,
  },
  {
    title: "Teste de velocidade",
    href: "https://www.speedtest.net/pt",
    icon: velocidadeIcon,
  },
  {
    title: "Problemas de conexão",
    href: "https://sitelestotelecom.vercel.app/faq",
    icon: conexaoIcon,
  },
  {
    title: "Upgrade de plano",
    href: "https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0",
    icon: roteadorIcon,
  },
];

export const SERVICE_CHANNELS = [
  {
    title: "Autoatendimento WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0",
    icon: autoatendimentoIcon,
  },
  {
    title: "Lojas",
    href: "/faq/lojas",
    icon: lojasIcon,
  },
  {
    title: "Central 24h",
    href: "/faq/como-entrar-em-contato-com-nossa-central-de-atendimento",
    icon: centralIcon,
  },
];

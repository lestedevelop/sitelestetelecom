import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é CGNAT? | Leste",
  description:
    "Informações sobre CGNAT, IPv4 compartilhado e impacto em aplicacoes externas.",
};

export default function OqueECgnat() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é CGNAT?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Com o esgotamento do IPv4, todos os equipamentos conectados à
              internet deveriam ser compatíveis com IPv6. No entanto, muitos
              dispositivos ainda utilizam apenas o IPv4, como alguns roteadores
              e sistemas de câmeras.
            </p>

            <p>
              Como a migração completa para o IPv6 ainda pode levar tempo, não
              é possível interromper o uso do IPv4, pois isso impactaria
              diretamente clientes que utilizam equipamentos não compatíveis.
            </p>

            <p>
              Para viabilizar essa transição, é utilizado o CGNAT (Carrier Grade
              NAT).
            </p>

            <p>
              O CGNAT é um tradutor de endereços de internet que permite o
              compartilhamento de um mesmo endereço público IPv4 entre vários
              usuários. Dessa forma, é possível continuar utilizando a internet
              normalmente enquanto ocorre a adaptação gradual ao IPv6.
            </p>
          </div>

          <FaqNote>
            <p>
              Em conexões com CGNAT, algumas aplicações que dependem de acesso
              externo direto, como redirecionamento de portas ou servidores
              locais, podem não funcionar corretamente, especialmente quando
              não há suporte a IPv6.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Mudei a senha do Wi-Fi e a internet caiu. O que fazer? | Leste",
  description:
    "Orientacoes para reconectar os dispositivos depois de alterar a senha do Wi-Fi.",
};

export default function MudeiMinhaSenhaNaCentralEminhanInternetCaiu() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Mudei a senha do Wi-Fi e a internet caiu. O que fazer?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Se você alterou a senha do Wi-Fi, será necessário atualizar a nova
              senha nos dispositivos conectados, como celular, computador, TV ou
              outros.
            </p>

            <p>
              A senha é atualizada automaticamente no roteador, sendo necessário
              apenas reconectar os dispositivos com a nova senha.
            </p>

            <p>
              Após a atualização, a conexão deve voltar ao normal.
            </p>
          </div>

          <FaqNote>
            <p>
              Se algum dispositivo continuar sem conexão, remova a rede salva e
              faça a conexão novamente com a nova senha.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

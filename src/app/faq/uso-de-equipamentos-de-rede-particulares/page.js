import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar a ONU ou o roteador livremente? | Leste",
  description:
    "Regras de uso da ONU e do roteador no serviço da Leste Telecom.",
};

export default function UsoDeEquipamentosDeRedeParticulares() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar a ONU ou o roteador livremente?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A ONU e o roteador possuem funções diferentes e regras específicas
              de uso.
            </p>

            <p>
              A ONU é o equipamento utilizado para conexão da internet e não
              poderá ter suas configurações alteradas e não poderá ser usada como
              switch de rede, ainda que o equipamento possua mais de uma porta
              ethernet. Dependendo da configuração, apenas a porta LAN 1 pode
              estar funcional para uso do cliente.
            </p>

            <p>
              Já o roteador, quando for um equipamento próprio do cliente, pode
              ter configurações alteradas, porém a configuração, manutenção e
              funcionamento são de responsabilidade do usuário.
            </p>
          </div>

          <FaqNote>
            <p>
              A ONU é um equipamento de propriedade da Leste e não deve sofrer
              alterações, pois isso pode causar falhas, instabilidade ou
              interrupção do serviço, além de dificultar o diagnóstico remoto.
            </p>
            <p>
              Caso seja identificado reset ou modificação indevida, poderá haver
              cobrança de visita técnica. A garantia do serviço é realizada por
              testes via cabo diretamente na ONU, não havendo garantia sobre
              Wi-Fi, e chamados relacionados à configuração de roteadores podem
              gerar cobrança.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

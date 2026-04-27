import FaqAccordion from "@/pageComponents/cameras/FaqAccordion";
import ActionButton from "@/components/Buttons/ActionButton";

const FAQ_ITEMS = [
  {
    question: "Em quais cidades está disponível?",
    answer:
      "Por enquanto, o serviço está disponível apenas nas cidades de Niterói e Maricá.\n"
  },
  {
    question: "Como funciona o processo de ativação?",
    answer:
      "A instalação pode ser realizada de duas formas: autônoma, seguindo o passo a passo fornecido na retirada do produto, ou mediante visita técnica (serviço pago, sujeito a cobranças adicionais).",
  },
  {
    question: "A Leste consegue acessar meus vídeos?",
    answer:
      " Não, os vídeos são criptografados. Apenas você pode visualizar as imagens pelo seu aplicativo.\n" +
        "\n",
  },
  {
    question: "Existe limite de armazenamento no plano de nuvem?",
    answer:
      "Não, o limite se dá apenas no número de dias de disponibilidade de nuvem contratada. Planos disponíveis com 7 e 30 dias de armazenamento.",
  },
  {
    question: "A Leste aciona a polícia ou serviços de emergência em caso de ocorrências?",
    answer:
      "Não. O serviço da Leste não é de monitoramento e não possui vínculo com redes de segurança, sendo apenas de automonitoramento.",
  },
  {
    question: "Posso usar a câmera com outra internet?",
    answer:
      "Não. O serviço está disponível apenas enquanto a câmera estiver conectada à rede da Leste.",
  },
];

export default function CamerasFaq() {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 md:py-16">
        <h3 className="text-xl font-semibold text-primary md:text-6xl">FAQ</h3>
        <div className="mt-6">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
        <div className="flex items-center justify-center px-8 mt-8">
          <ActionButton router={"/faq"} className={"bg-primary text-xl w-full max-w-96"}>Acessar FAQ Completo</ActionButton>
        </div>
      </div>
    </section>
  );
}

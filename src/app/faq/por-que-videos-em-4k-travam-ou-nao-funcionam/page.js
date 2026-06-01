import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Por que vídeos em 4K travam ou não funcionam? | Leste",
  description:
    "Entenda os motivos que podem afetar a reprodução de vídeos em 4K.",
};

export default function Videos4K() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Por que vídeos em 4K travam ou não funcionam?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Vídeos em 4K podem não funcionar corretamente devido a limitações
              de aplicativos, dispositivos ou capacidade do equipamento, e não
              necessariamente por causa da internet.
            </p>

            <p>
              Alguns aplicativos limitam a reprodução. O YouTube, por exemplo,
              pode restringir vídeos a 1080p em celulares, TV Box e Smart TVs
              com Android.
            </p>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Compatibilidade de resolução
            </h2>
            <p>
              Vídeos em 4K exigem telas com resolução mínima de 3840 × 2160
              pixels. Em telas menores, o dispositivo realiza conversão de
              imagem, o que aumenta o uso de processamento e pode causar
              travamentos.
            </p>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Requisitos para reprodução em 4K
            </h2>
            <p>Para uma boa experiência, é necessário:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Processador adequado</li>
              <li>Memória RAM suficiente</li>
              <li>Placa de vídeo compatível</li>
              <li>Tela com suporte a 4K</li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Configuração mínima sugerida
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Processador: Intel i3</li>
              <li>Memória: 6 GB RAM</li>
              <li>GPU: GTX 950 ou similar</li>
              <li>Tela: 4K, com resolução de 3840 × 2160</li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Configuração recomendada
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Processador: Intel i5, 4ª geração ou superior</li>
              <li>Memória: 8 GB RAM</li>
              <li>GPU: Nvidia GeForce GT 1030 ou superior</li>
              <li>Tela: 4K, com resolução de 3840 × 2160</li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Outros fatores que impactam
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Programas abertos simultaneamente</li>
              <li>Alto consumo de CPU ou memória</li>
            </ul>
          </div>

          <FaqNote>
            <p>
              A reprodução de vídeos em 4K não depende apenas da internet, mas
              também do desempenho do dispositivo utilizado.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

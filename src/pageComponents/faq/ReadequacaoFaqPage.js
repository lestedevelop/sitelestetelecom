import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export default function ReadequacaoFaqPage({ title, children, note }) {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={title} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            {children}
          </div>

          <FaqNote>
            <p>{note}</p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

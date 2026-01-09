import StoreCard, { Store } from "@/pageComponents/faq/StoreCard";
import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";

export default function StoresPage({title = "Onde estão localizadas nossas lojas?", backHref = "/", stores,}) {
    return (
        <main className="bg-light">
            <div className="container px-6 py-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <h1 className="text-[23px] md:text-[40px] font-bold text-dark">
                        {title}
                    </h1>

                    <BackToIndexButton href={backHref} />
                </div>
                <div className="mt-10 space-y-16">
                    {stores.map((store) => (
                        <StoreCard key={store.slug} store={store} />
                    ))}
                </div>
            </div>
        </main>
    );
}

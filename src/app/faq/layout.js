import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";

export const metadata = {
    title: "FAQ | Leste Telecom",
    description: "Leste Telecom",
};

export default function FaqLayout({ children,title,subtitle }) {
    return (
        <div className="bg-light text-[#5F5F5F] lg:pb-12 xl:pb-24">
            <section className="w-full">
                <HomeHeroBanner
                    alt="Banner FAQ da Leste Telecom"
                    className="h-[182px] md:h-[350px]"
                    contentClassName="container flex flex-col justify-center text-light"
                >
                    <div className="max-w-48 md:max-w-66">
                        <h1 className="mb-6 text-2xl font-bold md:text-[50px]">{title}</h1>
                        <p className="text-[13px] md:text-[26px]">{subtitle}</p>
                    </div>
                </HomeHeroBanner>
            </section>
            {children}
        </div>
    );
}

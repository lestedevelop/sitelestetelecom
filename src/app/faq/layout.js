export const metadata = {
    title: "FAQ | Leste Telecom",
    description: "Leste Telecom",
};

export default function FaqLayout({ children }) {
    return (
        <div className="bg-light text-[#5F5F5F] lg:pb-12 xl:pb-24">
            {children}
        </div>
    );
}

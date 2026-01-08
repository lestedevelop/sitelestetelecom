
export const metadata = {
    title: "Internet para Negocios | Leste Corporate",
    description: "Leste Telecom",
};

export default function CoporateLayout({ children }) {
    return (
        <div className="bg-white">
            {children}
        </div>
    );
}

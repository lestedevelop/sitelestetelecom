import StoresPage from "@/pageComponents/faq/StoresPage";
import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";

export default function LojasPage() {
    const stores = [
        {
            slug: "marica",
            city: "Maricá",
            address:
                "Av. Vereador Francisco Sabino da Costa 119 - Loja 5 - Centro - Maricá - RJ - 24900-100",
            reference: "No mesmo prédio da Casa & Vídeo",
            coords: "-22.916809,-42.819288",
            hours: [
                "De segunda a sexta, das 9h às 18h.",
                "Sábado, das 9h às 13h.",
            ],
        },
        {
            slug: "mage",
            city: "Magé",
            address:
                "Praça Nilo Peçanha - 45 - Loja 211 - Centro - Magé - RJ - 25900-088",
            reference: "No Shopping da praça",
            coords: "-22.656566,-43.039090",
            hours: [
                "De segunda a sexta, das 9h às 18h.",
                "Sábado, das 9h às 13h.",
            ],
        },
        {
            slug: "tangua",
            city: "Tanguá",
            address:
                "Rua Manoel João Gonçalves Qd C Lt 02 - Centro - Tanguá - 24890-000",
            reference: "Ao lado da Drogarias Alexandre e da Lotérica",
            coords: "-22.733858,-42.719258",
            hours: [
                "De segunda a sexta, das 9h às 18h.",
                "Almoço: de segunda a sexta, das 13h às 14h.",
                "Sábado, das 9h às 13h.",
            ],
        },
        {
            slug: "rio-bonito",
            city: "Rio Bonito",
            address:
                "Avenida Sete de Maio, Nº 50 - Loja 06 - Centro - Rio Bonito - RJ - 28800-000",
            reference: "Edifício Henry Ford",
            coords: "-22.712468,-42.623467",
            hours: [
                "De segunda a sexta, das 9h às 18h.",
                "Almoço: de segunda a sexta, das 13h às 14h.",
                "Sábado, das 9h às 13h.",
            ],
        },
        {
            slug: "itaborai",
            city: "Itaboraí",
            address:
                "Rua Acácio Campos dos Santos, Nº 100, Qd 12 - Centro - Itaboraí - RJ - 24800-021",
            reference: "Rua atrás da antiga Nalin",
            coords: "-22.8965212,-43.1247256",
            hours: [
                "De segunda a sexta, das 9h às 18h.",
                "Sábado, das 9h às 13h.",
            ],
        },
        {
            slug: "niteroi-stand",
            city: "Niterói (Stand)",
            address:
                "Rua Quinze de Novembro, 8 - Centro - Niterói - RJ - 24020-125",
            reference: "Shopping Plaza Niterói - Piso L3",
            coords: "-22.8965159,-43.1240139",
            hours: [
                "De segunda a sábado, das 10h às 22h.",
                "Domingo, das 13h às 21h.",
            ],
        },
    ];


    return (
        <div className={"min-h-screen"}>
            <AppBar/>
            <StoresPage
                title="Onde estão localizadas nossas lojas?"
                backHref="/faq"
                stores={stores}
            />
            <Footer/>
        </div>
    );
}

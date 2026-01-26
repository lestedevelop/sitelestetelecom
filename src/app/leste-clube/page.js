import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import BannerClube from "@/pageComponents/clube/BannerClube";
import MainClube from "@/pageComponents/clube/MainClube";
import CadastreSeuEstabelecimento from "@/pageComponents/clube/CadastreSeuEstabelecimento";
import ParceirosClube from "@/pageComponents/clube/ParceirosClube";


export default function LesteClube() {
    return (
        <div className="min-h-full bg-light overflow-hidden">
            <BannerClube/>
            <MainClube />
            <CadastreSeuEstabelecimento />
            <ParceirosClube />
        </div>
    );
}

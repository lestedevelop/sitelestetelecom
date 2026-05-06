import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import BannerClube from "@/pageComponents/clube/BannerClube";
import MainClube from "@/pageComponents/clube/MainClube";
import CadastreSeuEstabelecimento from "@/pageComponents/clube/CadastreSeuEstabelecimento";
import ParceirosClube from "@/pageComponents/clube/ParceirosClube";


export default function LesteClube() {
    return (
        <div className="min-h-full bg-light overflow-hidden py-8 pb-8 sm:pb-12 lg:pb-24 xl:pb-48">
            <BannerClube/>
            <MainClube />
            <CadastreSeuEstabelecimento />
            <ParceirosClube />
        </div>
    );
}

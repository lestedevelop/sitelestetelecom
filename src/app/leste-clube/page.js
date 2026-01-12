import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import BannerClube from "@/pageComponents/clube/BannerClube";
import MainClube from "@/pageComponents/clube/MainClube";


export default function LesteClube() {
    return (
        <div className="min-h-full bg-light">
            <AppBar/>
            <BannerClube/>
            <MainClube />
            <Footer/>
        </div>
    );
}

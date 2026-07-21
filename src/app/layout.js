import "./globals.css";
import { SiteProvider } from "@/contexts/SiteContext";
import RootShell from "@/components/layout/RootShell";
import PrivacyConsent from "@/components/layout/PrivacyConsent";
import SiteGtm from "@/components/layout/SiteGtm";
import localFont from "next/font/local";
import Script from "next/script";
import {SITE_GTM_CONTAINER_ID} from "@/lib/gtm/site";

const siteGtmScript = `(function(w,d,s,l,i){
if(w.location.pathname==='/vendas'||w.location.pathname.indexOf('/vendas/')===0||w.location.pathname.indexOf('/vendas-')===0)return;
w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE_GTM_CONTAINER_ID}');`;

const ibmPlexSans = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBMPlexSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});

export const metadata = {
  title: "Leste Telecom",
  description: "Leste Telecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${ibmPlexSans.className} bg-light text-dark antialiased`}>
        <Script id="gtm-site-head" strategy="beforeInteractive">
          {siteGtmScript}
        </Script>
        <SiteGtm />
        <SiteProvider>
          <RootShell>{children}</RootShell>
          <PrivacyConsent />
        </SiteProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { SiteProvider } from "@/contexts/SiteContext";
import RootShell from "@/components/layout/RootShell";
import PrivacyConsent from "@/components/layout/PrivacyConsent";
import localFont from "next/font/local";

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
        <SiteProvider>
          <RootShell>{children}</RootShell>
          <PrivacyConsent />
        </SiteProvider>
      </body>
    </html>
  );
}

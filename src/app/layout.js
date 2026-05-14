import "./globals.css";
import { SiteProvider } from "@/contexts/SiteContext";
import RootShell from "@/components/layout/RootShell";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
        </SiteProvider>
      </body>
    </html>
  );
}

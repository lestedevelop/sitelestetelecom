import "./globals.css";
import { SiteProvider } from "@/contexts/SiteContext";
import RootShell from "@/components/layout/RootShell";

export const metadata = {
  title: "Leste Telecom",
  description: "Leste Telecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-light text-dark antialiased">
        <SiteProvider>
          <RootShell>{children}</RootShell>
        </SiteProvider>
      </body>
    </html>
  );
}

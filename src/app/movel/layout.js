import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import 'react-multi-carousel/lib/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IBM_Plex_Sans } from 'next/font/google'


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "5G da Leste | Leste Movel",
    description: "Leste Telecom",
};
const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // escolha os pesos que quer
    display: 'swap',
})


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`!bg-light ${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.className} antialiased `}
        >
        {children}
        </body>
        </html>
    );
}

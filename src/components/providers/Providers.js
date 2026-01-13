"use client";

import { CityProvider } from "@/contexts/CityContext";

export default function Providers({ children }) {
    return <CityProvider>{children}</CityProvider>;
}

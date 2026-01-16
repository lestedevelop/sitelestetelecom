import React from "react";
import { getPerkByCodsimp } from "@/utils/getPerkByCodsimp";

export default function PerkCard({ descri_simp }) {
    const label = getPerkByCodsimp(descri_simp);

    if (!label) return null;

    return (
        <div className="mx-auto h-9 w-44 rounded-md bg-gray-100/90 px-3 text-sm font-medium text-dark flex items-center justify-center">
            {label}
        </div>
    );
}

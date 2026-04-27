import React from "react";
import { getPerkByCodsimp } from "@/utils/getPerkByCodsimp";
import Image from "next/image";
import skeelo from "@/assets/icons/skelolivros.svg"
import bebanca from "@/assets/icons/bebanca.svg"
import lesteClub from "@/assets/icons/lesteclube-green.svg"

export default function PerkCard({ descri_simp, onClick }) {
    const label = getPerkByCodsimp(descri_simp);

    if (!label) return null;

    return (
        <button
            type="button"
            onClick={() => onClick?.(label)}
            className="mx-auto flex h-9 w-44 items-center justify-center rounded-md bg-lightgreenBackground text-sm font-medium text-dark transition hover:opacity-90"
        >
            {label.includes("eelo") && <Image src={skeelo} alt={label} className={"w-18"}/>}
            {label.includes("banca") && <Image src={bebanca} alt={label} className={"w-20"}/>}
            {label.includes("lube") && <Image src={lesteClub} alt={label} className={"w-18"}/>}
        </button>
    );
}

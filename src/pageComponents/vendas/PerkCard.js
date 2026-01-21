import React from "react";
import { getPerkByCodsimp } from "@/utils/getPerkByCodsimp";
import Image from "next/image";
import skeelo from "@/assets/icons/skelolivros.svg"
import bebanca from "@/assets/icons/bebanca.svg"
import lesteClub from "@/assets/lesteclube.svg"

export default function PerkCard({ descri_simp }) {
    const label = getPerkByCodsimp(descri_simp);

    if (!label) return null;

    return (
        <div className="mx-auto h-9 w-44 rounded-md bg-gray-100/90 text-sm font-medium text-dark flex items-center justify-center">
            {label.includes("eelo") && <Image src={skeelo} alt={label} className={"w-18"}/>}
            {label.includes("banca") && <Image src={bebanca} alt={label} className={"w-20"}/>}
            {label.includes("lube") && <Image src={lesteClub} alt={label} className={"w-18"}/>}
        </div>
    );
}

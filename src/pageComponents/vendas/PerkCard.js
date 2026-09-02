import React from "react";
import { getPerkByCodsimp } from "@/utils/getPerkByCodsimp";
import Image from "next/image";
import skeelo from "@/assets/icons/skelolivros.svg"
import bebanca from "@/assets/icons/bebanca.svg"
import lesteClub from "@/assets/icons/lesteclube-green.svg"
import {resolveImageSrc} from "@/utils/imageSrc";

function getFallbackIcon(label = "") {
    if (label.includes("eelo")) return skeelo;
    if (label.includes("banca")) return bebanca;
    if (label.includes("lube")) return lesteClub;
    return null;
}

function getIconClassName(label = "", emphasized = false) {
    if (label.includes("banca")) return `${emphasized ? "w-24" : "w-20"} object-contain`;
    return `${emphasized ? "w-22" : "w-18"} object-contain`;
}

export default function PerkCard({ descri_simp, item, onClick, fullWidth = false, emphasized = false }) {
    const label = getPerkByCodsimp(descri_simp) || getPerkByCodsimp(item?.name) || item?.name;
    const imageSrc = resolveImageSrc(item, getFallbackIcon(label));

    if (!label || !imageSrc) return null;

    return (
        <button
            type="button"
            onClick={() => onClick?.(label)}
            className={`${fullWidth ? "w-full" : emphasized ? "w-48" : "w-44"} ${emphasized ? "h-10" : "h-9"} mx-auto flex cursor-pointer items-center justify-center rounded-md bg-lightgreenBackground text-sm font-medium text-dark transition hover:scale-[1.02] hover:opacity-90`}
        >
            <Image
                src={imageSrc}
                alt={label}
                width={96}
                height={36}
                className={getIconClassName(label, emphasized)}
            />
        </button>
    );
}

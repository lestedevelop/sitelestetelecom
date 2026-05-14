import React from "react";
import { getPerkByCodsimp } from "@/utils/getPerkByCodsimp";
import Image from "next/image";
import skeelo from "@/assets/icons/skelolivros.svg"
import bebanca from "@/assets/icons/bebanca.svg"
import lesteClub from "@/assets/icons/lesteclube-green.svg"
import {isDataImageSrc, resolveImageSrc} from "@/utils/imageSrc";

function getFallbackIcon(label = "") {
    if (label.includes("eelo")) return skeelo;
    if (label.includes("banca")) return bebanca;
    if (label.includes("lube")) return lesteClub;
    return null;
}

function getIconClassName(label = "") {
    if (label.includes("banca")) return "w-20 object-contain";
    return "w-18 object-contain";
}

export default function PerkCard({ descri_simp, item, onClick }) {
    const label = getPerkByCodsimp(descri_simp) || getPerkByCodsimp(item?.name) || item?.name;
    const imageSrc = resolveImageSrc(item, getFallbackIcon(label));

    if (!label || !imageSrc) return null;

    return (
        <button
            type="button"
            onClick={() => onClick?.(label)}
            className="mx-auto flex h-9 w-44 items-center justify-center rounded-md bg-lightgreenBackground text-sm font-medium text-dark transition hover:opacity-90"
        >
            <Image
                src={imageSrc}
                alt={label}
                width={96}
                height={36}
                className={getIconClassName(label)}
                unoptimized={isDataImageSrc(imageSrc)}
            />
        </button>
    );
}

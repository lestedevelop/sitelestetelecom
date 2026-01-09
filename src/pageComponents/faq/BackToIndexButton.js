"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackToIndexButton({href = "/", label = "VOLTAR PARA O ÍNDICE", className = "", variant = "link",}) {
    const router = useRouter();

    if (variant === "back") {
        return (
            <button
                type="button"
                onClick={() => router.back()}
                className={`inline-flex items-center justify-center rounded-full border border-primary px-6 py-2 text-xs font-semibold tracking-wide text-primary hover:opacity-90 ${className}`}>
                {label}
            </button>
        );
    }

    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center rounded-full border border-primary px-6 py-2 text-xs font-semibold tracking-wide text-primary hover:opacity-90 ${className}`}>
            {label}
        </Link>
    );
}

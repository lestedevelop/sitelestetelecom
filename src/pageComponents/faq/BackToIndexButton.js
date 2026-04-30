"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackToIndexButton({
  href = "/",
  label = "VOLTAR PARA O INDICE",
  className = "",
  variant = "link",
}) {
  const router = useRouter();
  const baseClassName =
    "inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition";

  if (variant === "back") {
    return (
      <button
        type="button"
        onClick={() => router.back()}
        className={`${baseClassName} border-primary bg-light text-primary hover:bg-primary hover:text-light ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClassName} border-primary bg-primary text-light shadow hover:bg-darkgreen ${className}`}
    >
      {label}
    </Link>
  );
}

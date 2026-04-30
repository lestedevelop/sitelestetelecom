import Link from "next/link";

export default function ContactPill({ href, label, icon, className = "" }) {
  const isExternal =
    href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border border-darkgreen bg-darkgreen px-5 py-3 text-sm font-semibold text-light transition hover:opacity-90",
        className,
      ].join(" ")}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

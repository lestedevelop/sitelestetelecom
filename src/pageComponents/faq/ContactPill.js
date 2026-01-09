import Link from "next/link";

export default function ContactPill({ href, label, icon, className = "" }) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={[
                "inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition",
                className,
            ].join(" ")}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}

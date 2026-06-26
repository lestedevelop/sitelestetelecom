import Link from "next/link";

export default function ContactPill({ href, label, icon, className = "" }) {
  const isExternal =
    href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me");
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full border border-darkgreen bg-darkgreen px-5 py-3 text-sm font-semibold text-light transition hover:opacity-90",
    className,
  ].join(" ");

  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  );

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  ) : (
    <Link
      href={href}
      className={classes}
    >
      {content}
    </Link>
  );
}

import Link from "next/link";

export default function MobileRow({href, label, onClick}) {
    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className="flex items-center gap-3 px-4 py-3"
            >
                <span className="h-2.5 w-2.5 rounded-full bg-primary"/>
                <span className="text-[16px]">{label}</span>
                <span className="ml-auto scale-165 text-black/50">›</span>
            </Link>
        </li>
    );
}

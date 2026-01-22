import Link from "next/link";
export default function NavLink({href, label}) {
    return (
        <Link
            href={href}
            className="text-[#1e5b50] hover:text-black transition-colors"
        >
            {label}
        </Link>
    );
}

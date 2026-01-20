import Image from "next/image";

export default function SocialIconButton({ href = "#", icon, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-graylighter bg-white grid place-items-center hover:bg-light transition"
        >
           <Image src={icon} alt={""} />
            {children}
        </a>
    );
}

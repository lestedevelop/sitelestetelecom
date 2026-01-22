import Image from "next/image";
import pinIcon from "@/assets/icons/pin.svg";
import userIcon from "@/assets/icons/user.svg";
import arrowDown from "@/assets/icons/arrowDown.svg";
import Link from "next/link";

export default function TopAction({href, label, icon, caret}) {
    const content = (
        <span className="inline-flex items-center gap-2 hover:text-black transition-colors">
      {icon === "pin" && <Image src={pinIcon} alt={""} className="h-5 -mt-3 w-5 text-primary" />}
            {icon === "user" && <Image src={userIcon} alt={""} className="h-5 w-5 text-primary"/>}
            <span>{label}</span>
            {(icon === "chev" || caret) && <Image src={arrowDown} alt={""} className="w-4 h-4" />}
    </span>
    );

    // external vs internal
    const isExternal = href?.startsWith("http");
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noreferrer noopener">
                {content}
            </a>
        );
    }
    return <Link href={href}>{content}</Link>;
}

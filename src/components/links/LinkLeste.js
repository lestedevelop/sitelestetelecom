import { colors } from "@/styles/colors";
import Link from "next/link";
import { twMerge } from 'tailwind-merge'


export default function LinkLeste({children,href,className,icon}) {
  return (
    <Link
      href={href}
      className={twMerge(` flex gap-2 items-center relative text-[#009373] transition-colors px-1 duration-300`, className)}
    >
      {icon}
      {children}
    </Link>
  );
}

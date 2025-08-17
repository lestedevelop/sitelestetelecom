import { colors } from "@/styles/colors";
import Link from "next/link";
import { twMerge } from 'tailwind-merge'


export default function LinkLeste({children,href,className}) {
  return (
    <Link
      href={href}
      className={twMerge(`relative text-[#00997b] transition-colors px-1 duration-300`, className)}
    >
      {children}
    </Link>
  );
}

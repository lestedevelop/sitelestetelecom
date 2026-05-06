import Image from "next/image";
import Link from "next/link";

export default function ClientActionCard({item}) {
  return (
    <Link
      href={item.href}
      className="group flex items-center md:items-start justify-between gap-y-2 rounded-xl bg-lightgreenBackground p-8 text-primary md:min-h-[224px] md:flex-col"
    >
      <Image src={item.icon} alt="" className="w-16 object-contain md:w-22" />
      <span className="max-w-[70%] text-lg font-bold leading-tight text-darkgreen group-hover:text-primary md:text-[28px]">
        {item.title}
      </span>
    </Link>
  );
}

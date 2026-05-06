import Image from "next/image";
import Link from "next/link";

export default function ChannelCard({item}) {
  return (
    <Link
      href={item.href}
      className="flex min-h-24 w-full items-center gap-5 rounded-xl bg-primary px-7 py-5 text-white transition hover:-translate-y-1 hover:bg-darkgreen"
    >
      <Image src={item.icon} alt="" className="h-14 w-14 object-contain brightness-0 invert" />
      <span className="max-w-[170px] text-base font-bold leading-tight lg:text-2xl">
        {item.title}
      </span>
    </Link>
  );
}

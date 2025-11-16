'use-client'

import Image from "next/image";

export default function ListItemAppLink({nameApp, linkApp, iconApp,textApp}) {
  return (
    <a
      href={linkApp || "#"}
      className="flex items-center gap-1  rounded-md text-white w-fit"
    >
      <div className="p-2 rounded-md flex items-center justify-center">
        <Image src={iconApp} alt="Leste Central" width={40} height={32} />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-[12px] text-gray-200">{textApp}</span>
        <span className="text-base font-semibold text-white">{nameApp}</span>
      </div>
    </a>
  );
}

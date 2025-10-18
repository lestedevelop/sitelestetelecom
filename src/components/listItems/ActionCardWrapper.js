import Image from "next/image";
import ActionCard from "./ActionCard";
import { twMerge } from "tailwind-merge";

export default function ActionCardWrapper({ icon,primaryText,secondaryText,title,className,width }) {
    return (
        <div className={twMerge("flex flex-col",className)}>
            <ActionCard className={'w-60'} textStyle={{ fontSize: 20 }} text={title}
                icon={<Image alt="icone de conexao" width={width || 50} src={icon} />} />
            <div className=" w-[290px] px-[24px]">
                <p className="text-[#045442] font-light text-md">
                    {primaryText}
                </p>

                <p className="text-[#045442] mt-3 font-light text-[12px]">
                    {secondaryText}
                </p>

            </div>
        </div>
    )
}
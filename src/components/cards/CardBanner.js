'use-client'
import ActionButton from "@/components/Buttons/ActionButton";
import Image from "next/image";


export default function CardBanner({image,title,buttonText,className,link}) {
    return (
        <div className={`${className}`}>
            <div className="relative container bg-primary h-70 md:rounded-3xl overflow-hidden flex items-stretch" >
                <Image
                    src={image}
                    alt="Casal feliz usando tablet"
                    fill
                    className="object-cover hidden md:block"
                />
                <div className="relative z-10 flex flex-col justify-center md:items-start items-center px-16 max-w-full text-white md:max-w-[50%]">
                    <h1 className="text-center md:text-left text-[32px] font-bold mb-6">
                        {title}
                    </h1>
                    <ActionButton link={link}>
                        {buttonText}
                    </ActionButton>
                </div>
            </div>
        </div>
    )
}
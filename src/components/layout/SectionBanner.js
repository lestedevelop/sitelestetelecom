import Image from "next/image";


export default function SectionBanner({image, title, subtitle, className}) {
    return (
        <div className={`${className}`}>
            <div className="relative container h-full overflow-hidden flex items-stretch" >
                <Image
                    src={image}
                    alt="Casal feliz usando tablet"
                    fill
                    className="object-cover"
                />
                <div className="relative max-w-48 md:max-w-66 z-10 flex flex-col justify-center text-light">
                    <h1 className="text-2xl md:text-[50px] font-bold mb-6">
                        {title}
                    </h1>
                   <p className="text-[13px] md:text-[26px]">
                       {subtitle}
                   </p>
                </div>
            </div>
        </div>
    )
}
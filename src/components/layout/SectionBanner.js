import Image from "next/image";


export default function SectionBanner({image, title, subtitle, className,imageClassName,titleClassName,subtitleClassName}) {
    return (
        <div className={`${className}`}>
            <div className="relative container h-full overflow-hidden flex items-stretch" >
                {image&&<Image
                    src={image}
                    alt="Casal feliz usando tablet"
                    fill
                    className={`object-cover ${imageClassName}`}
                />}
                <div className="relative max-w-48 md:max-w-66 z-10 flex flex-col justify-center text-light">
                    <h1 className={`text-2xl md:text-[50px] font-bold mb-6 ${titleClassName}`}>
                        {title}
                    </h1>
                   <p className={`text-[13px] md:text-[26px] ${subtitleClassName}`}>
                       {subtitle}
                   </p>
                </div>
            </div>
        </div>
    )
}
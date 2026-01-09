import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";


export default function TitleFaq({title, className, titleClassName, href='/faq'}) {
    return (
        <div className={`flex flex-col gap-4 md:flex-row md:items-start md:justify-between ${className}`}>
            <h1 className={`text-[23px] font-bold text-dark md:text-[40px] ${titleClassName}`}>
                {title}
            </h1>

            <div className={"min-w-50"}>
                <BackToIndexButton href={href}/>
            </div>
        </div>
    )
}
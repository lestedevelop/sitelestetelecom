import ActionButton from "@/components/Buttons/ActionButton";
import IconMap from "@/assets/icons/map.svg"
import Image from "next/image";

export default  function CardStoreLocations({cidade,endereco,referencia,link}){
    return (
        <div className={"flex flex-col justify-between gap-y-4 text-darkgreen  bg-light max-w-75 p-8 rounded-2xl"}>
            <div className={"flex items-center gap-x-4"}>
                <Image src={IconMap} width={21} alt={"Icon Map"} />
                <h4 className={"font-semibold text-[25px]"}>{cidade}</h4>
            </div>
            <div className={"text-sm"}>
                <p className={"font-semibold py-2"}>Endereço</p>
                <p>
                    {endereco}
                </p>
            </div>
            {referencia && <div className={"text-sm py-2"}>
                <p className={"font-semibold"}>Referencia</p>
                <p>
                    {referencia}
                </p>
            </div>}
                <ActionButton className={"text-light bg-primary text-[19px]"} link={link}>Veja no mapa</ActionButton>
        </div>
    )
}
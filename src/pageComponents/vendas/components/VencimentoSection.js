export default function VencimentoSection({vencimentos, onSelect, selected,className}) {
    return (
        <div className={className}>
            <h3 className={"font-bold text-2xl text-darkgreen"}>Vencimento</h3>
            <p className={"text-darkgreen text-lg pb-4"}>Qual melhor data de Vencimento para sua Fatura?</p>

            <div className="flex gap-x-4">
                {vencimentos.map(vencimento => (
                    <div key={vencimento} onClick={() => onSelect(vencimento)} className={`w-16 flex items-center cursor-pointer rounded-lg justify-center h-16 border-2 border-primary ${selected === vencimento? "bg-primary text-white" : "text-graylight"}`}>
                        <p className={"font-bold text-xl"}>{vencimento}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
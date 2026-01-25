import Link from "next/link";
import Image from "next/image";
import {SalesProviderNew} from "@/contexts/SalesContextNew";
import {useState} from "react";
import pinIcon from "@/assets/icons/pin.svg"
import ModalViabilidade from "@/components/layout/ModalViabilidade";

export default function InternetDropdown({id, items, onClose,modalViabilidadeOpen,setModalViabilidadeOpen}) {

    return (
        <>
            <div
                id={id}
                className="absolute left-0 mt-4 w-[340px] translate-y-4 rounded-2xl border border-graylight bg-white shadow-[0_24px_70px_rgba(0,0,0,.18)] overflow-hidden"
                role="menu"
            >
                <div className="px-5 py-4 bg-gradient-to-b from-light to-white">
                    <ul className="space-y-3 text-[18px]">
                        {items.map((item) => (
                            <li key={item.href} className="flex items-center gap-3">
                                <Image src={pinIcon} alt={""} className="h-5 w-5 text-primary" />
                                <Link href={item.href} onClick={onClose} className="text-[#1b4f45] hover:text-black">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => {setModalViabilidadeOpen(true)}}
                        className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-[18px] font-semibold text-white shadow-[0_12px_20px_rgba(30,107,93,.22)]"
                    >
                        Consultar Viabilidade
                    </button>
                </div>
            </div>
            {/*<SalesProviderNew>*/}
            {/*    <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen} />*/}
            {/*</SalesProviderNew>*/}
        </>
    );
}

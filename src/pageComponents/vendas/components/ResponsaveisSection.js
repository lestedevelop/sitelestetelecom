"use client";

import {useMemo, useState} from "react";
import {useSales} from "@/contexts/SalesContextNew";
import AddResponsavelModal from "@/pageComponents/vendas/components/AddResponsavelModal";
import {getFirstAndInitial} from "@/utils/Format";

export default function ResponsaveisSection({modalOpen,setModalOpen}) {
    const {data, addResponsavel, removeResponsavel} = useSales();

    const responsaveis = useMemo(() => data?.responsaveis || [], [data?.responsaveis]);

    return (
        <section className="space-y-3">
            <div>
                <h3 className={"font-bold text-2xl text-darkgreen"}>Responsáveis Adicionais</h3>
                <p className={"text-darkgreen text-lg pb-4"}>
                    Caso não esteja disponível na data da instalação, permita que outras pessoas na sua residência
                    recebam a
                    equipe técnica. Essas pessoas estarão autorizadas a realizar abertura de chamados e interagir com a
                    empresa.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {responsaveis.map((r) => (
                    <div
                        key={r.id}
                        className="flex items-center gap-3 rounded-lg border border-black/15 bg-white px-4 py-3 shadow-sm"
                    >
            <span className="text-sm font-semibold text-darkgreen">
              Responsável: {getFirstAndInitial(r.nome)}
            </span>

                        <button
                            type="button"
                            onClick={() => removeResponsavel(r.id)}
                            className="text-red-500 hover:text-red-600"
                            aria-label="Remover responsável"
                            title="Remover"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="h-12 w-full max-w-sm rounded-md border border-primary text-primary font-semibold hover:bg-emerald-50"
            >
                Adicionar Responsável
            </button>

            <AddResponsavelModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onAdd={(values) => addResponsavel(values)}
            />
        </section>
    );
}

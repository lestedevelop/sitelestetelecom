"use client";

import { useEffect, useMemo, useState } from "react";

import AgendaDayPicker from "@/pageComponents/vendas/form/AgendaDayPicker";
import { getVagaByCodCid } from "@/pageComponents/vendas/api/vaga";
import { useSales } from "@/contexts/SalesContextNew";
import { findCodCidByName } from "@/utils/cidade";
import { cidadesMock } from "@/mocks/cidadesMock";
import ProRataSection from "@/pageComponents/vendas/components/ProRataSection";

export default function StepAgendamento({ onNext, onBack }) {
    const { data, setAgendamento } = useSales();

    const codcid = useMemo(() => {
        return findCodCidByName(data?.cadastro?.cidade, cidadesMock);
    }, [data?.cadastro?.cidade]);

    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        let alive = true;

        async function load() {
            if (!codcid) {
                setSlots([]);
                return;
            }

            setLoading(true);
            setError("");

            try {
                const res = await getVagaByCodCid({ cidade: codcid, date: new Date() , predio: data?.cadastro?.tipoMoradia });
                const list = Array.isArray(res) ? res : res?.data || [];
                if (alive) setSlots(list);
            } catch (e) {
                if (alive) {
                    setError("Não foi possível carregar as datas. Tente novamente.");
                    setSlots([]);
                }
            } finally {
                if (alive) setLoading(false);
            }
        }

        load();
        return () => {
            alive = false;
        };
    }, [codcid]);

    function handleContinue() {
        const hasAgendamento = (data?.agendamento.start);
        if (!hasAgendamento) {
            return;
        }
        onNext?.();
    }

    function handleSelectSlot(slot) {
        setSelectedSlot(slot);
        setAgendamento({
            slotId: slot?.id,
            title: slot?.title,
            start: slot?.start,
            codcid,
        });

    }

    return (
        <div>
            {loading && <div>Carregando vagas...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
               <div>
                   <h2 className={'text-darkgreen text-xl md:text-3xl font-bold'}>Agendamento</h2>
                   <p className={'text-primary text-sm md:text-lg py-4'}>Escolha melhor data para sua instalação</p>
               </div>
            <AgendaDayPicker
                slots={slots}
                onSelectSlot={handleSelectSlot}
            />

            {data?.agendamento.start && <ProRataSection/>}
            {data?.agendamento.start && <div className="pt-6">
                <button
                    type="button"
                    onClick={handleContinue}
                    className="w-48 h-12 rounded-md bg-primary text-white font-semibold disabled:opacity-60"
                >
                    Continuar
                </button>
            </div>}
        </div>
    );
}

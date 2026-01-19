"use client";

import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { startOfDay, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";

function inferPeriod(title) {
    const t = String(title || "").toUpperCase();
    if (t.includes("MANH")) return "Manhã";
    if (t.includes("TARDE")) return "Tarde";
    return "Indefinido";
}

export default function AgendaDayPicker({ slots = [], onSelectSlot }) {
    const [selectedDay, setSelectedDay] = useState();
    const [period, setPeriod] = useState("");

    const availableDays = useMemo(() => {
        const m = new Map();
        for (const s of slots) {
            const d = startOfDay(new Date(s.start));
            m.set(d.getTime(), d);
        }
        return Array.from(m.values());
    }, [slots]);

    const daySlots = useMemo(() => {
        if (!selectedDay) return [];
        return slots.filter((s) => isSameDay(new Date(s.start), selectedDay));
    }, [slots, selectedDay]);

    const periodsAvailable = useMemo(() => {
        const set = new Set(daySlots.map((s) => inferPeriod(s.title)));
        return ["Manhã", "Tarde"].filter((p) => set.has(p));
    }, [daySlots]);

    const disabledDays = useMemo(
        () => [
            (date) =>
                !availableDays.some(
                    (d) => d.getTime() === startOfDay(date).getTime()
                ),
        ],
        [availableDays]
    );

    function pickPeriod(p) {
        setPeriod(p);
        const chosen = daySlots.find((s) => inferPeriod(s.title) === p);
        if (chosen) onSelectSlot?.(chosen);
    }

    return (
        <div className="leste-agenda">
            <div className="card">
                <DayPicker
                    mode="single"
                    selected={selectedDay}
                    onSelect={(d) => {
                        setSelectedDay(d);
                        setPeriod("");
                    }}
                    disabled={disabledDays}
                    locale={ptBR}
                    weekStartsOn={0}
                    showOutsideDays
                    className="leste-rdp"
                    formatters={{
                        formatCaption: (month) =>
                            month
                                .toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
                                .toUpperCase(),
                    }}
                />
            </div>

            <div className="card period-card">
                <div className="period-title">Melhor período para instalação</div>

                {!selectedDay ? (
                    <div className="muted">Selecione uma data</div>
                ) : periodsAvailable.length === 0 ? (
                    <div className="muted">Sem períodos disponíveis</div>
                ) : (
                    <div className="period-options">
                        {periodsAvailable.map((p) => (
                            <label key={p} className="radio">
                                <input
                                    type="radio"
                                    name="period"
                                    checked={period === p}
                                    onChange={() => pickPeriod(p)}
                                />
                                <span className="dot" />
                                <span>{p}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <style jsx global>{`
        :root {
          --primary: #009373;
          --light: #f2f2f2;
          --dark: #2e2e2e;
          --graylight: #6a7282;
          --graylighter: #e8ebea;
          --bg: #fff;
        }

        .leste-agenda {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 680px;
        }

        .card {
          background: var(--bg);
          border: 1px solid var(--graylighter);
          border-radius: 16px;
          padding: 22px 26px;
          display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            
        }

        .period-card {
          margin-top: 18px;
          padding: 26px;
          text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .period-title {
          font-weight: 800;
          color: var(--dark);
          font-size: 20px;
            
        }

        .muted {
          margin-top: 12px;
          color: var(--graylight);
          font-size: 18px;
        }

        .period-options {
          margin-top: 14px;
          display: flex;
          justify-content: center;
          gap: 26px;
        }

        /* ===== DayPicker (limpo) ===== */
        .leste-rdp {
          /* variáveis oficiais do DayPicker */
          --rdp-accent-color: var(--primary);
          --rdp-background-color: var(--primary);
          --rdp-outline: 2px solid rgba(0, 147, 115, 0.35);
          --rdp-outline-selected: 2px solid rgba(0, 147, 115, 0.35);
          margin: 0;
        }
        
        /* Header mês */
        .leste-rdp .rdp-caption_label {
          font-weight: 900;
          font-size: 22px;
          color: var(--dark);
          letter-spacing: 0.5px;
        }
        
        /* Setas mais “clean” como no print */
        .leste-rdp .rdp-nav_button {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          color: var(--primary);
          background: transparent;
        }
        .leste-rdp .rdp-nav_button:hover {
          background: rgba(0, 147, 115, 0.08);
        }

        /* Dias da semana */
        .leste-rdp .rdp-weekday {
          color: #009373; 
          font-weight: 600;
          text-transform: uppercase;
          font-size: 18px;
          padding-bottom: 12px;
            
        }

        /* Números */
        .leste-rdp .rdp-day_button {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          font-size: 22px;
          font-weight: 700;
          color: #8f9694; 
        }

        /* dia fora do mês / desabilitado */
        .leste-rdp .rdp-outside .rdp-day_button,
        .leste-rdp .rdp-disabled .rdp-day_button {
          color: #dfe3e2;
          opacity: 1;
            
        }

        /* dia selecionado (fica verde) */
        .leste-rdp .rdp-selected .rdp-day_button {
          background: var(--primary) !important;
          color: #fff !important;
        }

        /* dia "ativo" (tem vaga) -> deixa mais escuro pra diferenciar */
        .leste-rdp .rdp-day:not(.rdp-disabled):not(.rdp-outside) .rdp-day_button {
          color: #009373;
            
        }

        /* ===== Radio custom ===== */
        .radio {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          font-size: 18px;
          font-weight: 600;
          color: var(--dark);
        }
        .radio input {
          display: none;
        }
        .dot {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          border: 2px solid var(--primary);
          display: grid;
          place-items: center;
        }
        .dot::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: var(--primary);
          transform: scale(0);
          transition: transform 120ms ease;
        }
        .radio input:checked + .dot::after {
          transform: scale(1);
        }
        
        /* evita overflow no mobile */
        .leste-agenda,
        .card,
        .leste-rdp {
            max-width: 100%;
        }

        .leste-rdp .rdp-months {
            width: 100%;
        }

        .leste-rdp .rdp-month {
            width: 100%;
        }

        /* deixa o calendário centralizado e sem “esticar” */
        .leste-rdp .rdp-table {
            width: 100%;
        }

        /* ====== MOBILE ====== */
        
        @media(min-width: 1024px) {
            .leste-rdp .rdp-months {
                max-width: 680px;
            }
            .leste-rdp .rdp-outside .rdp-day_button,
            .leste-rdp .rdp-disabled .rdp-day_button  {
                margin: 0 16px;
            }
            .leste-rdp .rdp-selected .rdp-day_button {
                margin: 0 16px;

            }
            .leste-rdp .rdp-day:not(.rdp-disabled):not(.rdp-outside) .rdp-day_button {
                margin: 0 16px;
            }
            .leste-agenda,
            .card,
            .leste-rdp {
                max-width: 680px !important;
            }

        }
        @media (max-width: 480px) {
            .card {
                padding: 14px 14px;
                border-radius: 14px;
            }

            .period-card {
                padding: 18px 14px;
            }

            .period-title {
                font-size: 16px;
            }

            .muted {
                font-size: 14px;
            }

            .period-options {
                gap: 18px;
            }

            .radio {
                font-size: 14px;
            }

            /* caption menor */
            .leste-rdp .rdp-caption_label {
                font-size: 16px;
            }

            /* setas menores */
            .leste-rdp .rdp-nav_button {
                width: 34px;
                height: 34px;
                border-radius: 10px;
            }

            /* nomes dos dias menores */
            .leste-rdp .rdp-weekday {
                font-size: 12px;
                padding-bottom: 8px;
            }

            /* quadradinhos menores */
            .leste-rdp .rdp-day_button {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                font-size: 16px;
            }
        }

        /* ====== SMALL TABLET ====== */
        @media (min-width: 481px) and (max-width: 768px) {
            .card {
                padding: 18px 18px;
            }

            .leste-rdp .rdp-caption_label {
                font-size: 18px;
            }

            .leste-rdp .rdp-weekday {
                font-size: 14px;
            }

            .leste-rdp .rdp-day_button {
                width: 46px;
                height: 46px;
                font-size: 18px;
            }
        }
            `}</style>
        </div>
    );
}

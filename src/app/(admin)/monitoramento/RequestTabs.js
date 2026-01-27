"use client";

import { useMemo, useState } from "react";
import { JsonDraculaViewer } from "@/components/JsonDraculaViewer";

const TAB_KEYS = ["request", "payload", "response", "headers", "details"];

function TabButton({ active, onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                active
                    ? "bg-primary text-white"
                    : "border border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary"
            }`}
        >
            {children}
        </button>
    );
}

export default function RequestTabs({ event }) {
    const [active, setActive] = useState("request");

    const request = event?.request || {};

    const payloadData = useMemo(() => {
        return request?.bodySnippet || "";
    }, [request?.bodySnippet]);

    const responseData = useMemo(() => {
        return request?.responseSnippet || "";
    }, [request?.responseSnippet]);

    const headersData = useMemo(() => {
        return request?.headers || null;
    }, [request?.headers]);

    return (
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-neutral-800">Dados da requisição</h2>
                <div className="flex flex-wrap gap-2">
                    {TAB_KEYS.map((key) => (
                        <TabButton key={key} active={active === key} onClick={() => setActive(key)}>
                            {key === "request" && "Request"}
                            {key === "payload" && "Payload"}
                            {key === "response" && "Response"}
                            {key === "headers" && "Headers"}
                            {key === "details" && "Detalhes"}
                        </TabButton>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                {active === "request" ? (
                    <div className="grid gap-4 text-sm lg:grid-cols-2">
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-medium text-neutral-500">Método</p>
                                <p className="text-neutral-800">{request.method || "-"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-neutral-500">URL</p>
                                <p className="text-neutral-800 break-words">{request.url || "-"}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-medium text-neutral-500">Status</p>
                                <p className="text-neutral-800">{request.status ?? "-"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-neutral-500">Duração</p>
                                <p className="text-neutral-800">{request.durationMs ?? "-"}ms</p>
                            </div>
                        </div>
                    </div>
                ) : null}

                {active === "payload" ? (
                    payloadData ? (
                        <JsonDraculaViewer
                            value={payloadData}
                            title="Payload"
                            defaultExpanded={false}
                            maxPreviewChars={200}
                            height={320}
                        />
                    ) : (
                        <p className="text-sm text-neutral-500">Sem payload capturado.</p>
                    )
                ) : null}

                {active === "response" ? (
                    responseData ? (
                        <JsonDraculaViewer
                            value={responseData}
                            title="Response"
                            defaultExpanded={false}
                            maxPreviewChars={200}
                            height={320}
                        />
                    ) : (
                        <p className="text-sm text-neutral-500">Sem response capturada.</p>
                    )
                ) : null}

                {active === "headers" ? (
                    headersData ? (
                        <JsonDraculaViewer
                            value={headersData}
                            title="Headers"
                            defaultExpanded={false}
                            maxPreviewChars={120}
                            height={300}
                        />
                    ) : (
                        <p className="text-sm text-neutral-500">Sem headers capturados.</p>
                    )
                ) : null}

                {active === "details" ? (
                    <JsonDraculaViewer
                        value={event}
                        title="Evento"
                        defaultExpanded={false}
                        maxPreviewChars={200}
                        height={420}
                    />
                ) : null}
            </div>
        </div>
    );
}

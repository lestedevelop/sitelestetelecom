"use client";

import {useEffect, useState} from "react";

const CONSENT_STORAGE_KEY = "leste_privacy_consent";

export default function PrivacyConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            setIsVisible(localStorage.getItem(CONSENT_STORAGE_KEY) === null);
        } catch {
            setIsVisible(true);
        }
    }, []);

    function saveConsent(permission) {
        try {
            localStorage.setItem(CONSENT_STORAGE_KEY, permission);
        } catch {
            // Browsers may block storage in private or restricted contexts.
        }

        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        <section
            aria-labelledby="privacy-consent-title"
            aria-describedby="privacy-consent-description"
            className="fixed bottom-3 left-3 right-3 z-[100] rounded-lg border border-graylighter bg-light p-3 shadow-[0_8px_24px_rgba(0,85,66,0.18)] sm:bottom-4 sm:left-4 sm:right-auto sm:w-[320px]"
            role="dialog"
        >
            <h2
                className="text-base font-semibold text-darkgreen"
                id="privacy-consent-title"
            >
                Política de Privacidade
            </h2>

            <p
                className="mt-1.5 text-xs leading-[1.45] text-dark"
                id="privacy-consent-description"
            >
                Este site usa dados de navegação para melhorar o desempenho e personalizar o seu conteúdo.{" "}
                <a
                    className="font-semibold text-primary hover:underline focus-visible:underline"
                    href="https://site-institucional.lestetelecom.com.br/faq/politica-privacidade"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Ver detalhes
                </a>
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                    className="min-h-9 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-darkgreen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => saveConsent("accepted")}
                    type="button"
                >
                    Aceitar
                </button>
                <button
                    className="min-h-9 rounded-md border border-primary bg-light px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-lightgreenBackground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => saveConsent("declined")}
                    type="button"
                >
                    Recusar
                </button>
            </div>
        </section>
    );
}

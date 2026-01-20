"use client";

export default function IdleContinueModal({ open, onClose, onContinue }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999]">
            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* modal */}
            <div className="absolute inset-0 grid place-items-center p-4">
                <div className="w-full max-w-[620px] rounded-2xl bg-white shadow-xl border border-graylighter">
                    <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-primary text-2xl md:text-3xl font-extrabold">
                                    É rápido e fácil
                                </h3>

                                <p className="mt-2 text-dark text-base md:text-lg leading-relaxed">
                                    Não perca a oportunidade de seguir pelo melhor caminho!<br/>
                                    <span className="font-extrabold">Vamos concluir o seu pedido?</span>
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="text-graylight hover:text-dark transition text-xl leading-none"
                                aria-label="Fechar"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mt-6 flex justify-center sm:justify-end">
                            <button
                                type="button"
                                onClick={onContinue}
                                className="bg-primary text-white font-extrabold px-10 py-3 rounded-md"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

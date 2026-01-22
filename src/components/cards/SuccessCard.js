export default function SuccessCard({ ticketNumber, onNew }) {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center">
                <h2 className="text-3xl font-bold text-primary">Sucesso!</h2>

                <p className="mt-3 text-gray-700">
                    Seu formulário foi enviado. Nós falamos com você em breve.
                </p>

                <div className="mt-6 rounded-xl bg-light border border-gray-200 p-4">
                    <p className="text-gray-700">Seu número de protocolo é</p>
                    <p className="mt-1 text-2xl font-extrabold text-primary">
                        #{ticketNumber || "—"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onNew}
                    className="mt-8 h-12 px-6 rounded-lg bg-primary text-white font-semibold hover:opacity-95"
                >
                    Fazer nova indicação
                </button>
            </div>
        </div>
    );
}

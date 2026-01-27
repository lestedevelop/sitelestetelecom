"use client";

import { useState } from "react";

export default function LoginForm() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/monitor/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                setError(data?.error || "Falha no login");
                setLoading(false);
                return;
            }

            window.location.reload();
        } catch (err) {
            setError(err?.message || "Erro no login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
                <h1 className="text-xl font-semibold text-neutral-900">Monitoramento</h1>
                <p className="mt-1 text-sm text-neutral-500">
                    Insira a senha para acessar o painel.
                </p>
                <label className="mt-4 block text-sm font-medium text-neutral-700">
                    Senha
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-[#6D28D9] focus:outline-none"
                    placeholder="Senha do monitoramento"
                />
                {error ? (
                    <div className="mt-3 text-sm text-red-600">{error}</div>
                ) : null}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full rounded-md bg-[#6D28D9] px-4 py-2 text-sm font-medium text-white hover:bg-[#5b21b6]"
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </div>
    );
}

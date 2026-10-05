"use client";

import { useState } from "react";
import { LocateFixed, LoaderCircle } from "lucide-react";

function inputType(field) {
  if (field.type === "phone") return "tel";
  return ["email", "tel", "date", "number", "url"].includes(field.type) ? field.type : "text";
}

export default function LesteChatWebForm({ form, disabled, submitted, error, onSubmit }) {
  const [values, setValues] = useState(() => Object.fromEntries(form.fields.map((field) => [field.name, ""])));
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const change = (name, value) => setValues((current) => ({ ...current, [name]: value }));
  const requestLocation = (name) => {
    if (!navigator.geolocation) {
      setLocationError("Geolocalização não suportada neste navegador. Informe a localização manualmente.");
      return;
    }
    setLocationError("");
    setLocating(true);
    try {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          change(name, `${coords.latitude},${coords.longitude}`);
          setLocating(false);
        },
        () => {
          setLocationError("Não foi possível obter sua localização. Informe um link, coordenadas ou referência manualmente.");
          setLocating(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
      );
    } catch {
      setLocationError("Não foi possível obter sua localização. Informe um link, coordenadas ou referência manualmente.");
      setLocating(false);
    }
  };

  return <form className="mt-3 space-y-3 rounded-xl border border-graylighter bg-[#f4f7f6] p-3" onSubmit={(event) => { event.preventDefault(); onSubmit(form, values); }}>
    {form.title ? <h3 className="text-sm font-bold text-darkgreen">{form.title}</h3> : null}
    {form.fields.map((field) => {
      const common = {
        name: field.name,
        required: field.required,
        disabled: disabled || submitted,
        value: values[field.name] ?? "",
        onChange: (event) => change(field.name, event.target.value),
        className: "mt-1.5 w-full rounded-lg border border-graylighter bg-white px-3 py-2 text-sm text-darkgreen outline-none focus:border-primary disabled:bg-light",
      };
      return <div key={field.name}>
        <label className="block text-xs font-semibold text-darkgreen">
          {field.label}{field.required ? <span className="ml-1 text-red-600">*</span> : null}
          {field.type === "textarea" ? <textarea {...common} rows={3} placeholder={field.placeholder} />
            : field.options.length ? <select {...common}><option value="">Selecione uma opção</option>{field.options.map((option) => <option key={`${option.value}-${option.label}`} value={option.value}>{option.label}</option>)}</select>
              : <input {...common} type={inputType(field)} inputMode={field.format === "cpf" ? "numeric" : undefined} placeholder={field.placeholder} pattern={field.type === "date" ? undefined : field.pattern || undefined} />}
        </label>
        {field.format === "geolocation" ? <button type="button" onClick={() => requestLocation(field.name)} disabled={disabled || submitted || locating} className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-primary px-3 py-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white disabled:opacity-50">
          {locating ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LocateFixed className="h-4 w-4" />}
          {locating ? "Obtendo localização…" : "Usar minha localização"}
        </button> : null}
      </div>;
    })}
    {locationError ? <p className="text-xs text-red-700" role="alert">{locationError}</p> : null}
    {error ? <p className="rounded-lg border border-red-200 bg-red-50 p-2 text-xs text-red-700" role="alert">{error}</p> : null}
    {submitted ? <p className="text-xs font-semibold text-primary">Formulário enviado.</p> : <button type="submit" disabled={disabled || locating} className="w-full rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-white transition hover:bg-darkgreen disabled:opacity-50">{form.submitLabel}</button>}
  </form>;
}

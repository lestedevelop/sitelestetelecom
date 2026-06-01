export default function FaqNote({ children, title = "Nota" }) {
  return (
    <aside className="mt-8 rounded-xl border border-primary/25 bg-white px-5 py-5 text-dark md:px-6">
      <p className="text-base font-bold text-primary">{title}</p>
      <div className="mt-3 space-y-3 text-base leading-7 text-dark">
        {children}
      </div>
    </aside>
  );
}

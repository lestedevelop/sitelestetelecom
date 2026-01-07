export default function SectionForm({ title, children }) {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-darkgreen">{title}</h2>
            {children}
        </div>
    );
}

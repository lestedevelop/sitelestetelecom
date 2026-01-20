"use client";

export default function ReviewCard({ title, onEdit, children }) {
    return (
        <div className="bg-white border border-graylighter rounded-xl p-5 relative shadow">
            <div className="flex items-start justify-between">
                <h3 className="text-primary font-bold text-sm">{title}</h3>

                {onEdit ? (
                    <button
                        type="button"
                        onClick={onEdit}
                        className="text-graylight hover:text-primary transition"
                        aria-label={`Editar ${title}`}
                        title={`Editar ${title}`}
                    >
                        ✎
                    </button>
                ) : (
                    <span className="opacity-0">✎</span>
                )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-dark">
                {children}
            </div>
        </div>
    );
}

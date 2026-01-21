export default function PlanCardSkeleton() {
    return (
        <div className="w-full max-w-[330px] rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* topo (badge) */}
            <div className="pt-6 px-6">
                <div className="h-8 w-44 rounded-full bg-gray-200 animate-pulse mx-auto" />
            </div>
            {/* conteúdo */}
            <div className="px-8 pt-8 pb-6 space-y-6">
                <div className="space-y-3">
                    <div className="h-16 w-40 rounded bg-gray-200 animate-pulse mx-auto" />
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse mx-auto" />
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div className="h-5 w-40 rounded bg-gray-200 animate-pulse mx-auto" />

                <div className="space-y-3">
                    <div className="h-12 w-full rounded-xl bg-gray-200 animate-pulse" />
                    <div className="h-12 w-full rounded-xl bg-gray-200 animate-pulse" />
                    <div className="h-12 w-full rounded-xl bg-gray-200 animate-pulse" />
                </div>

                <div className="space-y-2 pt-2">
                    <div className="h-5 w-24 rounded bg-gray-200 animate-pulse mx-auto" />
                    <div className="h-12 w-40 rounded bg-gray-200 animate-pulse mx-auto" />
                </div>
            </div>

            {/* botão */}
            <div className="h-16 bg-gray-200 animate-pulse" />
        </div>
    );
}

export default function Loading() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="h-10 w-3/4 bg-graylighter rounded mb-4" />
            <div className="h-5 w-1/2 bg-graylighter rounded mb-8" />
            <div className="w-full aspect-[16/9] bg-graylighter rounded-xl mb-10" />
            <div className="space-y-3">
                <div className="h-4 bg-graylighter rounded" />
                <div className="h-4 bg-graylighter rounded" />
                <div className="h-4 bg-graylighter rounded w-2/3" />
            </div>
        </div>
    );
}

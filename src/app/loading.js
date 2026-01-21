export default function Loading() {
    return (
        <div className="p-6 space-y-4">
            <div className="h-8 w-64 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
            <div className="h-64 w-full rounded bg-gray-200 animate-pulse" />
        </div>
    );
}

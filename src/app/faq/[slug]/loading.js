export default function StructuredFaqLoading() {
  return (
    <main className="bg-light">
      <div className="container space-y-4 py-10 md:py-16">
        <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
        <div className="h-12 max-w-3xl animate-pulse rounded bg-gray-200" />
        <div className="mt-8 space-y-4 rounded-xl border border-graylighter bg-white p-6">
          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-40 w-full animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
}

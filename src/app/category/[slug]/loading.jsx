export default function Loading() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-4 w-36 rounded bg-gray-200" />

        <div className="mt-5 rounded-2xl bg-white p-6">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-32 rounded bg-gray-200" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-4">
              <div className="h-14 w-14 rounded-xl bg-gray-200" />
              <div className="mt-4 h-4 w-32 rounded bg-gray-200" />
              <div className="mt-4 h-5 w-20 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
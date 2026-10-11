import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-green-50 px-4">
      <div className="max-w-md rounded-2xl border bg-white p-8 text-center">
        <p className="text-6xl">🔎</p>

        <h1 className="mt-4 text-2xl font-bold">
          404
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 font-medium text-white hover:bg-green-800"
        >
          Back to home page
        </Link>
      </div>
    </main>
  );
}
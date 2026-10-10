import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-green-50 px-4">
      <div className="max-w-md rounded-2xl border bg-white p-8 text-center">
        <p className="text-6xl">🔎</p>

        <h1 className="mt-4 text-2xl font-bold">
          Categori not found!
        </h1>

        <p className="mt-2 text-gray-500">
          Your searched category is not found।
        </p>

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
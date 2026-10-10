import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryProducts from "@/app/components/CategoryProducts";

const CategoryDetails = async ({ params }) => {
  const { slug } = await params;

  let categories = [];
  let products = [];

  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/categories"
    );
    if (!response.ok) throw new Error();

    categories = await response.json();
  } catch {
    try {
      const response = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories"
      );
      if (!response.ok) throw new Error();

      categories = await response.json();
    } catch {
      return <p className="p-6">Category not loaded</p>;
    }
  }

  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products"
    );
    if (!response.ok) throw new Error();

    products = await response.json();
  } catch {
    try {
      const response = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products"
      );
      if (!response.ok) throw new Error();

      products = await response.json();
    } catch {
      return <p className="p-6">Item not loaded</p>;
    }
  }

  const category = categories.find((cat) => cat.slug === slug);

  if (!category) notFound();

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-green-700 hover:underline">
          ← Back to home page
        </Link>

        <section className="mt-5 rounded-2xl border bg-white p-6">
          <h1 className="text-3xl font-bold">
            {category.icon} {category.nameBn || category.name || category.slug}
          </h1>

          <p className="mt-2 text-gray-500">
            Total items: {categoryProducts.length}
          </p>
        </section>

        {categoryProducts.length > 0 ? (
          <CategoryProducts products={categoryProducts} />
        ) : (
          <section className="mt-6 rounded-2xl border bg-white p-10 text-center">
            <p className="text-lg font-semibold">
              No item in this category
            </p>
            <Link
              href="/"
              className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800"
            >
              Back to home page
            </Link>
          </section>
        )}
      </div>
    </main>
  );
};

export default CategoryDetails;
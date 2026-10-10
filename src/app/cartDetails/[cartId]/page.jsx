import Link from "next/link";
import MarketPrices from "@/app/components/MarketPrices";

const CartDetails = async ({ params }) => {
  const { cartId } = await params;

  let products = [];

  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products/"
    );

    if (!response.ok) throw new Error("API failed");

    products = await response.json();
  } catch {
    return (
      <p className="p-10 text-red-600">
        Failed to load product. Please try again.
      </p>
    );
  }

  const product = products.find(
    (item) => String(item.id) === String(cartId)
  );

  if (!product) {
    return <p className="p-10">Product not found!</p>;
  }

  const marketPrices = product.markets || [];

  const minPrice = marketPrices.length
    ? Math.min(...marketPrices.map((market) => market.min))
    : 0;

  const maxPrice = marketPrices.length
    ? Math.max(...marketPrices.map((market) => market.max))
    : 0;

  const averagePrice = marketPrices.length
    ? Math.round(
      marketPrices.reduce(
        (total, market) => total + (market.min + market.max) / 2,
        0
      ) / marketPrices.length
    )
    : 0;

  return (
    <main className="min-h-screen bg-[#f5f8f4] px-4 py-6 text-gray-800 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-green-700 hover:underline">
          ← Back to Home
        </Link>

        <p className="mt-5 text-sm text-gray-500">
          Home / All Items / {product.slug}
        </p>

        {/* Product summary */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex justify-between items-center gap-4">

            <div className="flex">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-5xl">
                {product.image}
              </div>

              <div className="flex flex-col px-2">
                <h1 className="text-2xl font-bold sm:text-3xl"> {product.slug} </h1>

                <div className="flex mt-2">
                  <span className="   text-sm">
                    per {product.unit} {product.category}
                  </span>
                </div>

                <span className="  py-">
                  Today{" "} {product.today > product.yesterday
                    ? `↑ ${product.today - product.yesterday} tk increased`
                    : product.today < product.yesterday
                      ? `↓ ${product.yesterday - product.today} tk decreased`
                      : "No change"}
                </span>

              </div>

            </div>


            <div className=" flex flex-col text-sm bg-green-50 rounded-2xl">

              <span className="p-3 text-sm">Today&apos;s Price</span>
              <span className="px-3 text-2xl font-bold sm:text-3xl">{product.today}</span>
              <span className="px-3">Taka/{product.unit}</span>
              <span className={`p-3 ${product.change.dir === "up"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-700"}`}>
                {product.change.dir === "up" ? "▲" : "▼"}{" "}
                {product.change.pct}%
              </span>
            </div>


          </div>
        </section>

        {/* Price summary */}
        <section className="mt-6">
          <h2 className="mb-3 text-xl font-bold">
            Price Summary
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-green-200 bg-white p-5">
              <p className="text-sm text-gray-500">Minimum Price</p>
              <p className="mt-2 text-2xl font-bold text-green-700">
                {minPrice} tk
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Lowest market price
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white p-5">
              <p className="text-sm text-gray-500">Maximum Price</p>
              <p className="mt-2 text-2xl font-bold text-red-600">
                {maxPrice} tk
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Highest market price
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-5">
              <p className="text-sm text-gray-500">Average Price</p>
              <p className="mt-2 text-2xl font-bold text-blue-700">
                {averagePrice} tk
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Average of market price ranges
              </p>
            </div>
          </div>
        </section>


        {/* Market-wise prices */}

        <MarketPrices
          markets={marketPrices}
          unit={product.unit}
        />

      </div>
    </main>
  );
};

export default CartDetails;
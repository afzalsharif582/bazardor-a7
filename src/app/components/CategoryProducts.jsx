"use client";

import { useState } from "react";
import Link from "next/link";

export default function CategoryProducts({ products }) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.today - b.today;
    if (sort === "high") return b.today - a.today;
    return 0;
  });

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        

        <label className="flex items-center gap-2 text-sm">
          Sort:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border bg-white p-2"
          >
            <option value="default">Default</option>
            <option value="low">Price: Ascending</option>
            <option value="high">Price: Descending</option>
          </select>
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/cartDetails/${product.id}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-green-400"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-4xl">
                {product.image}
              </div>

              <div>
                <h3 className="font-semibold">
                  {product.nameBn || product.slug}
                </h3>
                <p className="text-sm text-gray-500">
                  Per {product.unit}
                </p>
              </div>
            </div>
            <p className="mt-5">Today&apos;s price</p>

            <p className=" font-bold">{product.today} taka</p>
          </Link>
        ))}
      </div>
    </>
  );
}
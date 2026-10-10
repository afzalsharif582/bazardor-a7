import Image from "next/image";
import Link from "next/link";
import Banner from "./components/Banner";

const HomePage = async ({ searchParams }) => {
  const params = await searchParams;
  const sort = params?.sort || "ascending";

  let allItemsData;

  try {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    if (!response.ok) throw new Error("API 1 failed");

    allItemsData = await response.json();
  } catch (error) {
    try {
      const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

      if (!response.ok) throw new Error("API 2 failed");

      allItemsData = await response.json();
    } catch (error) {
      throw new Error("Both APIs failed");
    }
  }


  const upPriceFilteredData = allItemsData.filter(item => item.change.dir === "up");
  // console.log("after filter=", priceUpFilteredData);
  const upPriceHightoLowSortedData = [...upPriceFilteredData].sort(
    (a, b) => b.change.pct - a.change.pct
  );
  const upPriceTop6ItemsSliced = upPriceHightoLowSortedData.slice(0, 6);
  // console.log("after upPriceTop6ItemsSliced=", upPriceTop6ItemsSliced);

  // **down price
  const downPriceFilteredData = allItemsData.filter(item => item.change.dir === "down");
  // console.log("after filter downPriceFilteredData=", downPriceFilteredData);

  const downPriceLowToHighSortedData = [...downPriceFilteredData].sort(
    (a, b) => a.change.pct - b.change.pct
  );
  // console.log("after sorting downPriceLowToHighSortedData=", downPriceLowToHighSortedData);

  const downPriceTop6ItemsSliced = downPriceLowToHighSortedData.slice(0, 6);
  // console.log("after Sliced downPriceTop6ItemsSliced=", downPriceTop6ItemsSliced);


  const ascendingAllItemsData = [...allItemsData].sort(
    (a, b) => (a.today) - (b.today)
  );

  const descendingAllItemsData = [...allItemsData].sort(
    (a, b) => (b.today) - (a.today)
  );
  console.log("First descendingAllItemsData:", descendingAllItemsData[0])
  const sortedProducts =
    sort === "descending" ? descendingAllItemsData : ascendingAllItemsData;

  const countItems = allItemsData.length;
  ;



  return (

    <>  <Banner />

      {/*** Price increased top 6 itms maping */}
      <div className='bg-green-50'>
        <h2 className='text-xl font-medium p-5'><span className='text-red-500'>▲ </span>Today&apos;s Price Increases </h2>

        <div className=" max-w-7xl mx-auto p-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {upPriceTop6ItemsSliced.map((ti) => (
            <Link
              key={ti.id}
              href={`/cartDetails/${ti.id}`}
              className="block w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-3">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f4ef] text-6xl p-10">
                  {ti.image}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    {ti.slug}
                  </h3>
                  <p className="text-xs leading-4 text-gray-500">
                    per {ti.unit}
                  </p>
                </div>
              </div>

              {/* Price and percentage change */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Today&apos;s rate
                  </p>

                  <p className="text-sm font-bold leading-5 text-gray-950">
                    {ti.today}{" "}
                    <span className="font-normal">taka</span>
                  </p>
                </div>

                <span className="mb-0.5 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-red-500">
                  ▲ {ti.change.pct}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/*** Price Drops top 6 itms maping */}

      <div className='bg-green-50'>
        <h2 className='text-xl font-medium p-5'><span className='text-green-500'>▼ </span>Today&apos;s Price Drops  </h2>

        <div className=" max-w-7xl mx-auto p-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {downPriceTop6ItemsSliced.map((ti) => (
            <Link
              key={ti.id}
              href={`/cartDetails/${ti.id}`}
              className="block w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-3">
            

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f4ef] text-6xl p-10">
                  {ti.image}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    {ti.slug}
                  </h3>
                  <p className="text-xs leading-4 text-gray-500">
                    per {ti.unit}
                  </p>
                </div>
              </div>

              {/* Price and percentage change */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Today&apos;s rate
                  </p>

                  <p className="text-sm font-bold leading-5 text-gray-950">
                    {ti.today}{" "}
                    <span className="font-normal">taka</span>
                  </p>
                </div>

                <span className="mb-0.5 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-500">
                  ▼ {ti.change.pct}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ** All Products */}

      <div className='bg-green-50'>
        <div className='flex justify-between max-w-7xl mx-auto p-5'>
          <div>
            <h2 className='text-xl font-medium '>All Items</h2>
            <p>Total {countItems} items</p>
          </div>

          <form method="GET">
            <select
              name="sort"
              defaultValue={sort}

              className="rounded-lg border p-2"
            >
              <option value="ascending">Price: Low to high</option>
              <option value="descending">Price: High to low</option>
            </select>
            <button
              type="submit"
              className="ml-2 rounded-lg border px-3 py-2"
            >
              Sort
            </button>

          </form>
        </div>

        <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((ti) => (
            <Link
              key={ti.id}
              href={`/cartDetails/${ti.id}`}
              className="block w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-3">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f4ef] text-6xl p-10">
                  {ti.image}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    {ti.slug}
                  </h3>
                  <p className="text-xs leading-4 text-gray-500">
                    per {ti.unit}
                  </p>
                </div>
              </div>

              {/* Price and percentage change */}
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-500">
                    Today&apos;s rate
                  </p>

                  <p className="text-sm font-bold leading-5 text-gray-950">
                    {ti.today}{" "}
                    <span className="font-normal">taka</span>
                  </p>
                </div>

                <span className={ti.change.dir === "up"
                  ? "bg-red-50 text-red-500"
                  : "bg-green-50 text-green-600"}>
                  ▲  {ti.change.pct}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div >


    </>




  )
};





export default HomePage;
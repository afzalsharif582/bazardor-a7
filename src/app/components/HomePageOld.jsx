
// const HomePage = async () => {
//     let allItemsData;

//     try {
//         const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

//         if (!response.ok) throw new Error("API 1 failed");

//         allItemsData = await response.json();
//     } catch (error) {
//         try {
//             const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

//             if (!response.ok) throw new Error("API 2 failed");

//             allItemsData = await response.json();
//         } catch (error) {
//             throw new Error("Both APIs failed");
//         }
//     }


//     const upPriceFilteredData = allItemsData.filter(item => item.change.dir === "up");
//     // console.log("after filter=", priceUpFilteredData);
//     const upPriceHightoLowSortedData = [...upPriceFilteredData].sort(
//         (a, b) => b.change.pct - a.change.pct
//     );
//     const upPriceTop6ItemsSliced = upPriceHightoLowSortedData.slice(0, 6);
//     // console.log("after upPriceTop6ItemsSliced=", upPriceTop6ItemsSliced);

//     // **down price
//     const downPriceFilteredData = allItemsData.filter(item => item.change.dir === "down");
//     // console.log("after filter downPriceFilteredData=", downPriceFilteredData);

//     const downPriceLowToHighSortedData = [...downPriceFilteredData].sort(
//         (a, b) => a.change.pct - b.change.pct
//     );
//     console.log("after sorting downPriceLowToHighSortedData=", downPriceLowToHighSortedData);



//     const downPriceTop6ItemsSliced = downPriceLowToHighSortedData.slice(0, 6);
//     console.log("after Sliced downPriceTop6ItemsSliced=", downPriceTop6ItemsSliced);

//     // console.log("after sorting high to Low=", priceHightoLowSortedData);


//     return (
//         <>
//             {/*** Price increased top 6 itms maping */}
//             <div className='bg-green-50'>
//                 <h2 className='text-xl font-medium p-5'><span className='text-red-500'>▲ </span>Today&apos;s Price Increases </h2>

//                 <div className=" max-w-7xl mx-auto p-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

//                     {upPriceTop6ItemsSliced.map((ti) => (
//                         <div
//                             key={ti.id}
//                             className="w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-3"
//                         >

//                             <div className="flex items-center gap-3">
//                                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f4ef] text-6xl p-10">
//                                     {ti.image}
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="text-xl font-semibold leading-5 text-gray-800">
//                                         {ti.slug}
//                                     </h3>
//                                     <p className="text-xs leading-4 text-gray-500">
//                                         per Kg
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Price and percentage change */}
//                             <div className="mt-5 flex items-end justify-between">
//                                 <div>
//                                     <p className="text-xs text-gray-500">
//                                         Today&apos;s rate
//                                     </p>

//                                     <p className="text-sm font-bold leading-5 text-gray-950">
//                                         {ti.today}{" "}
//                                         <span className="font-normal">taka</span>
//                                     </p>
//                                 </div>

//                                 <span className="mb-0.5 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-red-500">
//                                     ▲ {ti.change.pct}%
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/*** Price Drops top 6 itms maping */}

//             <div className='bg-green-50'>
//                 <h2 className='text-xl font-medium p-5'><span className='text-red-500'>▲ </span>Today&apos;s Price Drops  </h2>

//                 <div className=" max-w-7xl mx-auto p-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

//                     {downPriceTop6ItemsSliced.map((ti) => (
//                         <div
//                             key={ti.id}
//                             className="w-full rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-3"
//                         >

//                             <div className="flex items-center gap-3">
//                                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f4ef] text-6xl p-10">
//                                     {ti.image}
//                                 </div>

//                                 <div className="min-w-0">
//                                     <h3 className="text-xl font-semibold leading-5 text-gray-800">
//                                         {ti.slug}
//                                     </h3>
//                                     <p className="text-xs leading-4 text-gray-500">
//                                         per Kg
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Price and percentage change */}
//                             <div className="mt-5 flex items-end justify-between">
//                                 <div>
//                                     <p className="text-xs text-gray-500">
//                                         Today&apos;s rate
//                                     </p>

//                                     <p className="text-sm font-bold leading-5 text-gray-950">
//                                         {ti.today}{" "}
//                                         <span className="font-normal">taka</span>
//                                     </p>
//                                 </div>

//                                 <span className="mb-0.5 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-red-500">
//                                     ▲ {ti.change.pct}%
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>








//         </>




//     )
// };



// export default HomePage;
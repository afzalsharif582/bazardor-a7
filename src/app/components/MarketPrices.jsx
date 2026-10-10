"use client";

import { useState } from "react";


export default function MarketPrices({ markets, unit }) {
    const [division, setDivision] = useState("সব");
    const [search, setSearch] = useState("");

    const divisions = [
        "সব",
        ...new Set(markets.map((market) => market.division)),
    ];

    const filteredMarkets = markets.filter((market) => {
        const matchesDivision =
            division === "সব" || market.division === division;

        const matchesSearch = market.market
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesDivision && matchesSearch;
    });

    return (
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">
                    Market-wise Today&apos;s Prices
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                    {filteredMarkets.length} markets
                </span>
            </div>


            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-162.5 text-left text-sm">
                    <thead className="bg-green-50 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Bazar</th>
                            <th className="px-4 py-3 font-semibold">Division</th>
                            <th className="px-4 py-3 text-right font-semibold">
                                Minimum
                            </th>
                            <th className="px-4 py-3 text-right font-semibold">
                                Average
                            </th>
                            <th className="px-4 py-3 text-right font-semibold">
                                Maximum
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {filteredMarkets.map((market, index) => (
                            <tr
                                key={`${market.market}-${index}`}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-4 py-4 font-medium">
                                    {market.market}
                                </td>

                                <td className="px-4 py-4 text-gray-600">
                                    {market.division}
                                </td>

                                <td className="px-4 py-4 text-right font-medium text-green-700">
                                    {market.min} tk
                                </td>

                                <td className="px-4 py-4 text-right font-medium text-blue-700">
                                    {Math.round((market.min + market.max) / 2)} tk
                                </td>

                                <td className="px-4 py-4 text-right font-medium text-red-600">
                                    {market.max} tk
                                </td>
                            </tr>
                        ))}

                        {filteredMarkets.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-4 py-8 text-center text-gray-500"
                                >
                                    No markets found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </section>
    );
}
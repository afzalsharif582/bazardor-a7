"use client";

import { useRef } from "react";
import Image from "next/image";
import CurrentDate from "./nav-items/CurrentDate";

const Banner = ({ className = "" }) => {

    const headingRef = useRef(null);

    return (
        <section className={`px-4 py-6 sm:px-6 lg:py-10 ${className}`}>

            <div className="relative isolate flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-green-100/80  bg-linear-to-br from-white via-green-50/80 to-green-100/60 p-6 shadow-xl shadow-green-950/5 transition-all duration-300  hover:shadow-2xl hover:shadow-green-950/10 sm:p-8 lg:flex-row lg:gap-10 lg:p-10 " >

                <div aria-hidden="true"
                    className="           pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

                <div aria-hidden="true"
                    className="  pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col items-start lg:w-3/5">
                    <CurrentDate
                        className="inline-flex items-center rounded-full border border-green-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-green-800 shadow-sm shadow-green-900/5 backdrop-blur-sm" />

                    <h1 className=" mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl " >
                        Today&apos;s Market Prices
                        <span className="mt-2 block text-green-700">
                            at a Glance
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        Compare market-wise prices for rice, lentils, cooking oil,
                        vegetables, fish, meat, eggs, and spices. Explore average,
                        minimum, and maximum prices alongside market trends—all in
                        one convenient place.
                    </p>


                    <button onClick={() =>
                        window.scrollBy({
                            top: 1400,
                            behavior: "smooth",
                        })
                    } className="btn rounded-xl mt-10 bg-green-700 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-200  hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/25 active:translate-y-0">Explore Market Prices
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                            → </span>
                    </button>

                </div>

                {/* Hero Image */}
                <div className="relative z-10 flex w-full items-center justify-center lg:w-2/5 lg:justify-end">
                    <div aria-hidden="true"
                        className=" absolute h-64 w-64 rounded-full bg-green-200/30 blur-2xl sm:h-80 sm:w-80 " />

                    <Image
                        src="/bazar-hero.png"
                        alt="A basket of fresh market produce"
                        width={460}
                        height={288}
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                        className="relative h-auto w-full max-w-xs object-contain drop-shadow-[0_18px_24px_rgba(22,101,52,0.16)] transition-transform duration-500 hover:scale-[1.03] sm:max-w-sm lg:max-w-md " />
                </div>
            </div>
        </section>
    );
};

export default Banner;
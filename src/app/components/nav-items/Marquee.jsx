import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    let marqueeData;

     try {
    const response = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    if (!response.ok) throw new Error("All product API 1 failed");

    marqueeData = await response.json();
  } catch (error) {
    try {
      const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

      if (!response.ok) throw new Error("All product API 2 failed");

      marqueeData = await response.json();
    } catch (error) {
      throw new Error("Both APIs failed");
    }
  }
    // const response = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    // const marqueeData = await response.json();
    // console.log("{after setting 2API marquee=}", marqueeData);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">

            <MarqueeText pauseOnHover="true" direction="right" duration= "5" loop={true} className="py-2">
                {marqueeData.map((item) => (
                    <div key={item.id}><span className="mx-4"> </span>

                        {item.image}
                        <span> </span>
                        {item.slug}
                        <span> </span>
                        {item.today}
                        <span> </span>
                        <span>Tk/</span>
                        {item.unit}
                        <span> </span>
                        {item.change.dir === 'up' ? (
                            <span className="text-red-500">▲</span>
                        ) : (
                            <span className="text-green-500">▼</span>
                        )}
                        {item.change.pct}
                         <span>%</span>
                    </div>
                ))}

            </MarqueeText>
        </div>
    );
};

export default Marquee;
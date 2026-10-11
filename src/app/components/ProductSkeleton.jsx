
import React from 'react';

const ProductSkeleton = ({ count = 8 }) => {
    
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-3"
                >
                    <div className="aspect-square w-full animate-pulse rounded-lg bg-gray-200" />

                    <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-gray-200" />

                    <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />

                    <div className="mt-4 h-9 w-full animate-pulse rounded-lg bg-gray-200" />
                </div>
            ))}
        </div>
    );
};

export default ProductSkeleton;

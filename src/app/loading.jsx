import React from 'react';
import ProductSkeleton from './components/ProductSkeleton';

const loading = () => {
    return (
        <main className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6 h-7 w-48 animate-pulse rounded bg-gray-200" />

      <ProductSkeleton count={8} />
    </main>
    );
};

export default loading;
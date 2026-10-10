import React from 'react';
import CategoryLinks from './CategoryLinks';

const GetCategories = async () => {

    let categories;
    try {
        const response = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");

        if (!response.ok) throw new Error("Categories API 1  failed");

        categories = await response.json();

    } catch (error) {
        try {
            const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");

            if (!response.ok) throw new Error("Categories API 2  failed");

            categories = await response.json();

        } catch (error) {
            throw new Error("Both Categories APIs failed");
        }
    }console.log("after seting 2api category=", categories );
    




    // const response = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    // const categories = await response.json();

    return <CategoryLinks categories={categories} />;

};

export default GetCategories;
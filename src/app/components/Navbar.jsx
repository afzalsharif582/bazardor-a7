import React from 'react';
import TopPortion from './nav-items/TopPortion';
import GetCategories from './nav-items/GetCategories';
import Marquee from './nav-items/Marquee';

const Navbar = () => {
    return (
        <>
            <TopPortion />
            <GetCategories />
            <Marquee />

        </>
    );
};

export default Navbar;
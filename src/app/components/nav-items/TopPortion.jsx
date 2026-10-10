'use client';

import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from './CurrentDate';


const TopPortion = () => {
    return (
        <nav className="navbar justify-between">
            {/* Mobile Menu */}


            {/* Logo */}
            <Link
                href="/"
                className=" btn-ghost text-2xl font-bold tracking-tight"
            >
                <div className="flex items-center gap-2">
                    <div className='bg-green-700 btn'><Image src="/logo-icon.png" alt="Logo" width={30} height={30} />
                    </div>

                    <div className="flex flex-col items-start">
                        <h2>Bazardor</h2>
                        <CurrentDate className=" text-sm font-medium text-gray-500" />
                    </div>

                </div>


            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-end ">
                <div className="menu menu-horizontal items-center gap-5">
                    <button className="btn btn-ghost">Sign in</button>
                    <button className="btn rounded-xl bg-green-700 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-all duration-200  hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl hover:shadow-green-900/25 active:translate-y-0">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default TopPortion;
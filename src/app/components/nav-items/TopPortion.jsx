'use client';

import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from './CurrentDate';
import LogButtons from './LogButtons';


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
            <LogButtons/>
        </nav>
    );
};

export default TopPortion;
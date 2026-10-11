import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-base-300 bg-base-200 px-4 py-4">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-sm text-base-content/70 sm:flex-row sm:text-left">
                    <p>
                        <span className="font-semibold text-base-content">
                            Market Prices
                        </span>{" "}
                        — Essential product prices at a glance.
                    </p>

                    <p className="text-xs sm:text-sm">
                        All prices are indicative and may vary depending on market conditions.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
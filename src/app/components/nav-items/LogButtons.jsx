/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const LogButtons = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {user ? (
                <>
                    {/* Profile button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        className="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-base-200"
                    >
                        <div className="avatar">
                            <div className="h-9 w-9 rounded-full">
                                <img
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "User"}
                                />
                            </div>
                        </div>

                        <span className="max-w-24 truncate text-sm font-medium">
                            {user.name || "User"}
                        </span>

                        <span
                            className={`text-xs transition-transform ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        >
                            ▼
                        </span>
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                        <>
                            <button
                                type="button"
                                aria-label="Close menu"
                                className="fixed inset-0 z-40 cursor-default"
                                onClick={() => setIsOpen(false)}
                            />

                            <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl">
                                {/* User information */}
                                <div className="flex items-center gap-3 px-2 py-3">
                                    <div className="avatar">
                                        <div className="h-11 w-11 rounded-full">
                                            <img
                                                src={
                                                    user.image ||
                                                    "/default-avatar.png"
                                                }
                                                alt={user.name || "User"}
                                            />
                                        </div>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold">
                                            {user.name || "User"}
                                        </p>
                                        <p className="truncate text-xs text-base-content/60">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="my-1 border-t border-base-200" />

                                <Link
                                    href="/profile"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-base-200"
                                >
                                    <span>👤</span>
                                    My Profile
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-error hover:bg-error/10"
                                >
                                    <span>↪</span>
                                    Log Out
                                </button>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="flex items-center gap-3">
                    <Link
                        href="/signin"
                        className="btn btn-ghost btn-sm"
                    >
                        Sign in
                    </Link>

                    <Link
                        href="/signup"
                        className="btn btn-sm rounded-xl bg-green-700 text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-0.5 hover:bg-green-800"
                    >
                        Sign up
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LogButtons;
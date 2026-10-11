"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const SignUpPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");

    const passwordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!passwordValid) {
            toast.error(
                "Use 8+ characters, including uppercase, lowercase, and a number."
            );
            return;
        }

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        setLoading(true);

        try {
            const { data, error } = await authClient.signUp.email({
                name: user.name,
                email: user.email,
                password: user.password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message || "Signup failed!");
                return;
            }

            if (data) {
                toast.success("Account created successfully!");
                router.push("/");
            }
        } catch (err) {
            console.error("Signup error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const handleGoogleSisnIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGitHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };
    

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
            <form onSubmit={onSubmit} className="w-full max-w-md">
                <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-xl">
                    <div className="mb-5 text-center">
                        <h1 className="text-3xl font-extrabold bg-linear-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                        <p className="text-sm text-base-content/60 mt-2">
                            Join us today! Create your account below.
                        </p>
                    </div>

                    <label htmlFor="name" className="label font-medium">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        className="input input-bordered w-full focus:outline-green-600"
                        placeholder="Enter your full name"
                        required
                    />

                    <label htmlFor="email" className="label font-medium mt-3">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="input input-bordered w-full focus:outline-green-600"
                        placeholder="you@example.com"
                        required
                    />

                    <label htmlFor="password" className="label font-medium mt-3">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        className="input input-bordered w-full focus:outline-green-600"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        required
                    />

                    <p className={`text-xs mt-2 ${passwordValid ? "text-green-600" : "text-base-content/60"
                        }`}>
                        {passwordValid
                            ? "✓ Your password meets the requirements."
                            : "At least 8 characters, 1 uppercase, 1 lowercase, and 1 number."}
                    </p>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full mt-2 border-0 bg-green-700 text-white hover:bg-green-800 disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Creating account...
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </button>


                    <div>
                        {/* Divider */}
                        <div className="my-5 flex items-center gap-3 text-xs text-base-content/50">
                            <span className="h-px flex-1 bg-base-content/15" />
                            <span>Or Continue With</span>
                            <span className="h-px flex-1 bg-base-content/15" />
                        </div>

                        {/* Social login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={handleGoogleSisnIn}
                                className="btn btn-outline w-full rounded-lg border-base-300 bg-base-100 text-base-content hover:border-base-content/30 hover:bg-base-300"
                            >
                                <svg
                                    aria-label="Google logo"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 48 48"
                                    role="img"
                                >
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.99 46.98 31.82 46.98 24.55Z" />
                                    <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
                                </svg>
                                <span className="text-xs sm:text-sm">Google</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleGitHubSignIn}
                                className="btn w-full rounded-lg border-0 bg-neutral text-neutral-content hover:bg-neutral/80"
                            >
                                <svg
                                    aria-label="GitHub logo"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    role="img"
                                >
                                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                                </svg>
                                <span className="text-xs sm:text-sm">GitHub</span>
                            </button>
                        </div>
                    </div>



                    <p className="text-center text-sm text-base-content/70 mt-5">
                        Already have an account?{" "}

                        <Link href="/signin"
                            className="font-semibold text-green-700 hover:text-green-800 hover:underline"
                        >
                            Sign in
                        </Link>

                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;
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
    const handleGoogleSisnIn = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
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
                        <span className="divider text-gray-500 font-bold">Or</span>

                        <div>
                        <button onClick={handleGoogleSisnIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
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
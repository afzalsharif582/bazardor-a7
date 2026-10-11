"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const toastId = toast.loading("Signing in...");

        try {
            const { data, error } = await authClient.signIn.email({
                email: user.email,
                password: user.password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(
                    error.message || "Invalid email or password.",
                    { id: toastId }
                );
                return;
            }

            toast.success("Sign in successful!", { id: toastId });
        } catch (err) {
            toast.error("Something went wrong. Please try again.", {
                id: toastId,
            });
        }
    };

    return (
        <div className="flex items-center justify-center py-20">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset w-xs rounded-box border border-base-300 bg-base-200 p-4">
                    <legend className="fieldset-legend block w-full bg-linear-to-r from-green-900 to-emerald-100 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent">
                        Sign in
                    </legend>

                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="input w-full"
                        placeholder="Your Email"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="input w-full"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />

                    <button
                        type="submit"
                        className="btn mt-4 bg-green-700 text-white hover:bg-green-800"
                    >
                        Sign in
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;
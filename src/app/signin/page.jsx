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

    const handleGoogleSisnIn = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
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

                    <div>
                        <button onClick={handleGoogleSisnIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;
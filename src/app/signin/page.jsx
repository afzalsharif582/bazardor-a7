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
                <fieldset className="fieldset rounded-2xl border border-base-300 bg-base-200 p-6 shadow-xl sm:p-8">
                    {/* Header */}
                    <div className="mb-5 text-center">
                        <h1 className="bg-linear-to-r from-green-900 to-emerald-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                            Sign in
                        </h1>
                        <p className="mt-2 text-sm text-base-content/60">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    {/* Email */}
                    <label htmlFor="email" className="label font-medium">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="input input-bordered w-full rounded-lg focus:border-green-700 focus:outline-green-700"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />

                    {/* Password */}
                    <label htmlFor="password" className="label mt-3 font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="input input-bordered w-full rounded-lg focus:border-green-700 focus:outline-green-700"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn mt-5 w-full rounded-lg border-0 bg-green-700 text-white shadow-sm transition-colors hover:bg-green-800"
                    >
                        Sign in
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

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-base-content/60">
                        Don&apos;t have an account?{" "}
                        <a
                            href="/signup"
                            className="font-semibold text-green-700 hover:text-green-800 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;
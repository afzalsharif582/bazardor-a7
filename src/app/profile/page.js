"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Failed to log out.");
        return;
      }

      toast.success("Logged out successfully!");
      router.push("/");
    } catch {
      toast.error("Something went wrong while logging out.");
    } finally {
      setLoggingOut(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedName = name.trim();

    if (updatedName.length < 2) {
      toast.error("Name must be at least 2 characters.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        toast.error(error.message || "Failed to update name.");
        return;
      }

      toast.success("Name updated successfully!");
      setName("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f5f1] px-4 py-6">
      <main className="mx-auto max-w-150">
        <header className="mb-4">
          <h1 className="text-xl font-bold">My Profile</h1>
          <p className="text-xs text-gray-500">
            See your account&apos;s information here
          </p>
        </header>

        <section className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-[#e1e9e2] bg-white/80 p-4">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt={user?.name || "User"}
              width={60}
              height={60}
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold">
                {user?.name || "User"}
              </h2>
              <p className="truncate text-xs text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="shrink-0 rounded-md border border-red-400 px-3 py-1.5 text-xs text-red-500 hover:bg-red-50 disabled:opacity-50"
          >
            {loggingOut ? "Logging out..." : "↩ Log out"}
          </button>
        </section>

        <section className="rounded-xl border border-[#e1e9e2] bg-white/80 p-4">
          <h2 className="mb-5 text-sm font-semibold">Information</h2>

          <form onSubmit={handleUpdate}>
            <label htmlFor="name" className="mb-1 block text-xs">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={user?.name || "Enter your name"}
              required
              minLength={2}
              className="h-9 w-full rounded-md border border-[#e3eae4] px-3 text-sm outline-none focus:border-green-600"
            />

            <button
              type="submit"
              disabled={loading || !name.trim()}
              className="mt-3 h-9 w-full rounded-md bg-green-700 text-xs text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Name"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
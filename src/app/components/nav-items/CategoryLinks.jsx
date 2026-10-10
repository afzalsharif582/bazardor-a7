"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLinks = ({ categories }) => {
  const pathname = usePathname();

  return (
  <div className="w-full overflow-x-auto">
  <div className="flex w-max min-w-full justify-center gap-2 px-2 sm:w-full">
    {categories.map((cat) => {
      const href = `/category/${cat.slug}`;
      const isActive = pathname === href;

      return (
        <Link
          key={cat.id}
          href={href}
          className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors ${
            isActive
              ? "bg-green-700 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.id}</span>
        </Link>
      );
    })}
  </div>
</div>
  );
};

export default CategoryLinks;
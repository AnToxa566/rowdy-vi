"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppPath } from "@/common/enums";

export const Sidebar = () => {
  const pathname = usePathname();

  const pages = [
    { link: AppPath.ADMIN, label: "Дашбоард" },
    { link: AppPath.TRANSACTIONS, label: "Транзакції" },
    { link: AppPath.ACCOUNTS, label: "Рахунки" },
  ];

  return (
    <aside className="sticky top-0 p-4 h-screen min-w-[250px] shadow-lg flex flex-col gap-4">
      <h1 className="font-black text-2xl text-[#e62621]">Rowdy</h1>

      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link
            key={page.label}
            href={page.link}
            className={`p-2 rounded-md hover:bg-gray-200 ${
              page.link === pathname ? "bg-gray-200" : ""
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

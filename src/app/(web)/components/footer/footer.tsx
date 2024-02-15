import Link from "next/link";
import Image from "next/image";

import { RiArrowUpSLine } from "@remixicon/react";

import { AppPath } from "@/common/enums";

export const Footer = () => {
  const links = [
    { label: "Послуги", href: AppPath.HOME_SERVICES },
    { label: "Барбери", href: AppPath.HOME_MASTERS },
    { label: "Контакти", href: AppPath.HOME_CONTACTS },
  ];

  return (
    <footer className="py-10 px-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between gap-8">
        <Link
          href={AppPath.HOME}
          className="shrink-0"
          aria-label="Головна сторінка"
        >
          <Image
            width={90}
            height={15}
            alt="Логотип Rowdy"
            src="/images/logo-white.png"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-gray-300 transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={AppPath.HOME_HERO}
          className="flex items-center gap-1 font-medium hover:text-gray-300 transition-colors"
        >
          До гори <RiArrowUpSLine />
        </Link>

        <span className="text-xs">© ROWDY</span>
      </div>
    </footer>
  );
};

"use client";

import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { AppPath } from "@/common/enums";

export type NavLinksVariant = "horizontal" | "vertical";

export interface NavLinksProps {
  variant?: NavLinksVariant;
  onClick?: () => void;
}

export const NavLinks: FC<NavLinksProps> = ({
  variant = "horizontal",
  onClick = () => {},
}) => {
  const t = useTranslations();

  const links = [
    { label: t("shared.services"), href: AppPath.HOME_SERVICES },
    { label: t("shared.barbers"), href: AppPath.HOME_MASTERS },
    { label: t("shared.gallery"), href: AppPath.HOME_GALLERY },
    { label: t("shared.about_us"), href: AppPath.HOME_ABOUT },
    { label: t("shared.contacts"), href: AppPath.HOME_CONTACTS },
  ];

  return (
    <div
      className={`flex ${
        variant === "horizontal" ? "items-center gap-4" : "flex-col gap-6"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClick}
          className="hover:text-gray-300 text-white transition-colors uppercase whitespace-nowrap"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

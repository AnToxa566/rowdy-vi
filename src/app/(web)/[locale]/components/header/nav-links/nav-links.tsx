"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { scrollTo } from "@/common/utils";
import { ScrollOffset, SectionSelector } from "@/common/enums";

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
    { label: t("shared.prices"), selector: SectionSelector.PRICES },
    { label: t("shared.services"), selector: SectionSelector.SERVICES },
    { label: t("shared.barbers"), selector: SectionSelector.MASTERS },
    { label: t("shared.gallery"), selector: SectionSelector.GALLERY },
    { label: t("shared.contacts"), selector: SectionSelector.CONTACTS },
  ];

  const handleLinkClick = (selector: SectionSelector) => {
    scrollTo(selector, ScrollOffset.HEADER);
    onClick();
  };

  return (
    <div
      className={`flex ${
        variant === "horizontal" ? "items-center gap-4" : "flex-col gap-6"
      }`}
    >
      {links.map((link, idx) => (
        <span
          key={idx}
          onClick={() => handleLinkClick(link.selector)}
          className="hover:text-gray-300 text-white transition-colors uppercase whitespace-nowrap cursor-pointer"
        >
          {link.label}
        </span>
      ))}
    </div>
  );
};

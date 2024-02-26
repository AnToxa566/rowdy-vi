"use client";

import { FC } from "react";
import { motion } from "framer-motion";
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
    { label: t("shared.services"), selector: SectionSelector.SERVICES },
    { label: t("shared.barbers"), selector: SectionSelector.MASTERS },
    { label: t("shared.gallery"), selector: SectionSelector.GALLERY },
    { label: t("shared.about_us"), selector: SectionSelector.ABOUT_US },
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
        <motion.div
          key={link.label}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.3, ease: "easeInOut" }}
        >
          <span
            onClick={() => handleLinkClick(link.selector)}
            className="hover:text-gray-300 text-white transition-colors uppercase whitespace-nowrap cursor-pointer"
          >
            {link.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

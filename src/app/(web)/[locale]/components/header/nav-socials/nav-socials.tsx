import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  RiInstagramFill,
  RiTiktokFill,
  RiTelegramFill,
} from "@remixicon/react";

import { AppLink } from "@/common/enums";

export const NavSocials = () => {
  const t = useTranslations("header");

  const links = [
    {
      href: AppLink.INSTAGRAM,
      label: t("instagram"),
      icon: <RiInstagramFill />,
    },
    {
      href: AppLink.TIK_TOK,
      label: t("tik_tok"),
      icon: <RiTiktokFill />,
    },
    {
      href: AppLink.TELEGRAM,
      label: t("telegram"),
      icon: <RiTelegramFill />,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            aria-label={link.label}
            className="text-white hover:text-gray-300 transition"
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

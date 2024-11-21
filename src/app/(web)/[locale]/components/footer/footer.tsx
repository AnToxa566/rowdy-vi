import Link from "next/link";
import { useTranslations } from "next-intl";

import { RiArrowUpSLine } from "@remixicon/react";

import { AppPath } from "@/common/enums";

import { SectionContainer, Logo, NavLinks } from "..";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer>
      <SectionContainer id="footer" isBlackBg>
        <div className="flex items-center justify-between gap-8">
          <Logo />

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <Link
            href={AppPath.HOME_HERO}
            className="flex items-center gap-1 font-medium hover:text-gray-300 transition-colors whitespace-nowrap"
          >
            {t("up")} <RiArrowUpSLine />
          </Link>

          <span className="text-xs whitespace-nowrap">© ROWDY</span>
        </div>
      </SectionContainer>
    </footer>
  );
};

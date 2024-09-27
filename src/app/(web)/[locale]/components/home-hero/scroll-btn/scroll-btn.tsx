"use client";

import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { RiArrowDownLine } from "@remixicon/react";

import { scrollTo } from "@/common/utils";
import { ScrollOffset, SectionSelector } from "@/common/enums";

export const ScrollButton = () => {
  const t = useTranslations();

  const handleDownClick = () => {
    scrollTo(SectionSelector.FEATURES, ScrollOffset.HEADER);
  };

  return (
    <Button
      isIconOnly
      radius="full"
      variant="bordered"
      aria-label={t("shared.down")}
      className="text-white animate-bounce"
      onClick={handleDownClick}
    >
      <RiArrowDownLine />
    </Button>
  );
};

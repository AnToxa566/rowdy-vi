"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Select, SelectItem } from "@nextui-org/react";

export const LanguageSelector = () => {
  const t = useTranslations("shared");

  const locale = useLocale();

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const languages = [
    { label: "UK", value: "uk" },
    { label: "RU", value: "ru" },
    { label: "EN", value: "en" },
  ];

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(nextLocale);
    });
  }

  return (
    <Select
      size="sm"
      radius="full"
      variant="bordered"
      isLoading={isPending}
      disallowEmptySelection
      aria-label={t("select_lang")}
      classNames={{
        value: "text-white",
        selectorIcon: "text-white",
        trigger:
          "border-white data-[open=true]:border-white data-[focus=true]:border-white w-20",
      }}
      defaultSelectedKeys={[locale]}
      onChange={onSelectChange}
    >
      {languages.map((language) => (
        <SelectItem key={language.value} value={language.value}>
          {language.label}
        </SelectItem>
      ))}
    </Select>
  );
};

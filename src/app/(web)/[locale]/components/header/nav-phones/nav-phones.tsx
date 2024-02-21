"use client";

import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button, Tooltip } from "@nextui-org/react";

export interface NavPhonesProps {
  onClick?: () => void;
}

export const NavPhones: FC<NavPhonesProps> = ({ onClick = () => {} }) => {
  const t = useTranslations("header");

  const phones = [
    { href: "tel:380663372763", label: "+38 (066) 337 2763" },
    { href: "tel:380687710337", label: "+38 (068) 771 0337" },
  ];

  return (
    <Tooltip
      showArrow={true}
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold uppercase">
            {t("work_hours")}
          </div>

          <div className="">10:00 - 20:00</div>
        </div>
      }
    >
      <div className="flex items-center gap-2 w-max">
        {phones.map((phone) => {
          return (
            <Link
              key={phone.label}
              href={phone.href}
              target="_blank"
              onClick={onClick}
            >
              <Button
                radius="full"
                variant="bordered"
                size="lg"
                className="text-white hidden xl:flex"
              >
                {phone.label}
              </Button>

              <Button
                radius="full"
                variant="bordered"
                className="text-white xl:hidden"
              >
                {phone.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </Tooltip>
  );
};

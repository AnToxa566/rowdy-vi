"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { SectionTitle } from "../section-title";
import { SectionContainer } from "../section-container";

enum Masters {
  TopBarber = "Top Barber",
  Expert = "Expert",
}

export const HomePrices = () => {
  const t = useTranslations("home.prices");

  const masters = Object.values(Masters);

  const prices = [
    {
      label: t("haircuts"),
      data: [
        { label: t("man_haircut"), topBarberPrice: 550, expertPrice: 700 },
        {
          label: t("man_long_haircut"),
          topBarberPrice: 600,
          expertPrice: 750,
        },
        {
          label: t("baby_haircut"),
          topBarberPrice: 550,
          expertPrice: 700,
        },
        {
          label: t("haircut_and_beard"),
          topBarberPrice: 850,
          expertPrice: 1000,
        },
        { label: t("beard"), topBarberPrice: 450, expertPrice: 500 },
      ],
    },
    {
      label: t("care"),
      data: [
        { label: t("hairstyling"), topBarberPrice: 150, expertPrice: 150 },
        {
          label: t("wax"),
          topBarberPrice: 150,
          expertPrice: 150,
        },
        { label: t("black_mask"), topBarberPrice: 300, expertPrice: 300 },
      ],
    },
    {
      label: t("shave"),
      data: [
        { label: t("king_shave"), topBarberPrice: 400, expertPrice: 450 },
        { label: t("head_shave"), topBarberPrice: 450, expertPrice: 500 },
      ],
    },
    {
      label: t("camouflage"),
      data: [
        {
          label: t("head_camouflage"),
          topBarberPrice: 600,
          expertPrice: 600,
        },
        {
          label: t("beard_camouflage"),
          topBarberPrice: 550,
          expertPrice: 550,
        },
      ],
    },
  ];

  return (
    <SectionContainer id="prices" isBlackBg>
      <div className="flex flex-col gap-8 dark">
        <SectionTitle title={t("title")}></SectionTitle>

        <Accordion variant="splitted">
          {masters.map((master, i) => (
            <AccordionItem
              key={i}
              aria-label={master}
              title={<span className="text-xl font-semibold">{master}</span>}
            >
              <div className="flex flex-col gap-8 mb-4">
                {prices.map((pricesGroup, k) => (
                  <div key={k} className="flex flex-col">
                    <h3 className="text-lg font-semibold">
                      {pricesGroup.label}
                    </h3>

                    {pricesGroup.data.map((prices, m) => (
                      <div
                        key={m}
                        className="flex items-center justify-between gap-4 py-4 border-b border-gray-500"
                      >
                        <span>{prices.label}</span>
                        <span className="text-nowrap">
                          {master === Masters.TopBarber
                            ? prices.topBarberPrice
                            : prices.expertPrice}{" "}
                          грн
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};

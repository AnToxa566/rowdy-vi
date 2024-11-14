"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Carousel } from "../carousel";
import { Container } from "../container";

import { Service, ServiceCard } from ".";

export const HomeServices = () => {
  const t = useTranslations("home.services");

  const services: Service[] = [
    {
      label: t("cards.haircut"),
      imageSrc: "/images/services/haircut.jpeg",
      price: 500,
    },
    {
      label: t("cards.beard"),
      imageSrc: "/images/services/beard.jpeg",
      price: 400,
    },
    {
      label: t("cards.haircut_and_beard"),
      imageSrc: "/images/services/haircut_and_beard.jpeg",
      price: 800,
    },
    {
      label: t("cards.shaving"),
      imageSrc: "/images/services/shaving.jpeg",
      price: 400,
    },
    {
      label: t("cards.kids"),
      imageSrc: "/images/services/kids_haircut.jpeg",
      price: 500,
    },
    {
      label: t("cards.coloring"),
      imageSrc: "/images/services/gray_hair_coloring.jpeg",
      price: 450,
    },
    {
      label: t("cards.long_hair"),
      imageSrc: "/images/services/long-hair.jpeg",
      price: 550,
    },
    {
      label: t("cards.styling"),
      imageSrc: "/images/services/hair-styling.jpg",
      price: 150,
    },
    {
      label: t("cards.wax"),
      imageSrc: "/images/services/wax.jpeg",
      price: 150,
    },
  ];

  return (
    <Container id="services">
      <div className="flex flex-col gap-8">
        <Carousel
          title={t("title")}
          actionOpt={{
            label: t("look_prices"),
            href: AppLink.ALTEGIO_SERVICES,
            target: "_blank",
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Carousel>

        <div className="mx-auto">
          <Link
            href={AppLink.ALTEGIO_SERVICES}
            target="_blank"
            className="mx-auto"
          >
            <Button
              color="primary"
              radius="full"
              size="lg"
              endContent={<RiArrowRightLine />}
              className="bg-[#e62621] animate-pulsate"
            >
              {t("select_service")}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

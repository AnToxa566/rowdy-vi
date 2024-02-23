"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Service, ServiceCard } from ".";

export const HomeServices = () => {
  const t = useTranslations("home.services");

  const services: Service[] = [
    {
      label: t("cards.haircut"),
      imageSrc: "/images/services/haircut.jpeg",
      price: 450,
    },
    {
      label: t("cards.beard"),
      imageSrc: "/images/services/beard.jpeg",
      price: 350,
    },
    {
      label: t("cards.haircut_and_beard"),
      imageSrc: "/images/services/haircut_and_beard.jpeg",
      price: 700,
    },
    {
      label: t("cards.shaving"),
      imageSrc: "/images/services/shaving.jpeg",
      price: 450,
    },
    {
      label: t("cards.kids"),
      imageSrc: "/images/services/kids_haircut.jpeg",
      price: 450,
    },
    {
      label: t("cards.coloring"),
      imageSrc: "/images/services/gray_hair_coloring.jpeg",
      price: 450,
    },
    {
      label: t("cards.long_hair"),
      imageSrc: "/images/services/long-hair.jpeg",
      price: 500,
    },
    {
      label: t("cards.styling"),
      imageSrc: "/images/services/hair-styling.jpg",
      price: 100,
    },
    {
      label: t("cards.wax"),
      imageSrc: "/images/services/wax.jpeg",
      price: 150,
    },
  ];

  return (
    <section id="services" className="relative py-10 px-4 bg-white z-30">
      <div className="container mx-auto flex flex-col gap-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
            {t("title")}
          </h2>

          <Link href={AppLink.ALTEGIO_SERVICES} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              className="bg-[#e62621]"
            >
              {t("look_prices")}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-4 overflow-x-scroll"
        >
          {services.map((service) => (
            <ServiceCard key={service.label} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

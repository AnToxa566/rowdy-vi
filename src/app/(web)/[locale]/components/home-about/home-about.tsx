"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";
import { RiArrowRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

export const HomeAbout = () => {
  const t = useTranslations();

  return (
    <section
      className="relative z-30 py-10 px-4 bg-black text-white"
      id="about"
    >
      <div className="container mx-auto flex flex-col gap-8">
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold leading-tight uppercase"
        >
          {t("home.about.title")}
        </motion.h2>

        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:w-1/2"
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_01_HTML"),
              }}
              className="text-lg font-medium"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_02_HTML"),
              }}
              className="font-light"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_03_HTML"),
              }}
              className="font-light"
            ></p>

            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("home.about.text_04_HTML"),
              }}
              className="font-light"
            ></p>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Button
                color="primary"
                radius="full"
                size="lg"
                endContent={<RiArrowRightLine />}
                className="bg-[#e62621] w-full md:w-auto animate-pulsate"
              >
                {t("shared.online_booking")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden sm:block lg:w-1/2"
          >
            <Image
              width={630}
              height={470}
              alt=""
              src="/images/about/hero.jpg"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>

          <Image
            width={630}
            height={470}
            alt=""
            src="/images/about/hero.jpg"
            className="w-full h-auto rounded-xl sm:hidden"
          />
        </div>
      </div>
    </section>
  );
};

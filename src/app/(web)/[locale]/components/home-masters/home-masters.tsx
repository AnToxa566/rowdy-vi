"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { RiInformationLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { Master, MasterCard } from ".";

export const HomeMasters = () => {
  const t = useTranslations("home.masters");

  const masters: Master[] = [
    {
      imageSrc: "/images/masters/oleg.jpg",
      name: t("oleg"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/_barber_marcus_1337/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2222922",
    },
    {
      imageSrc: "/images/masters/roma.jpg",
      name: t("roma"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/rg.ruslanovich/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231976",
    },
    {
      imageSrc: "/images/masters/maksim.jpg",
      name: t("maksim"),
      graduation: "Expert",
      instagramLink: "https://www.instagram.com/maxim.tsirylnik/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231978",
    },
    {
      imageSrc: "/images/masters/liza.jpg",
      name: t("liza"),
      graduation: "Top Barber",
      instagramLink: "https://www.instagram.com/ewaitingbaydak_/",
      altegioLink: "https://b829839.alteg.io/company/778954/menu?o=m2231977",
    },
  ];

  return (
    <section
      className="relative py-10 px-4 sm:px-8 bg-black text-white z-30"
      id="masters"
    >
      <div className="container mx-auto flex flex-col gap-8">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
            {t("title")}
          </h2>

          <Link href={AppLink.ALTEGIO_MASTERS} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              className="bg-[#e62621]"
            >
              {t("select_master")}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 overflow-x-scroll"
        >
          {masters.map((master, idx) => (
            <MasterCard key={idx} master={master} />
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, viewTarget: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <Popover showArrow offset={10} placement="bottom" backdrop="blur">
            <PopoverTrigger>
              <Button
                radius="full"
                color="primary"
                className="bg-[#e62621] mx-auto"
                startContent={<RiInformationLine size={18} />}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.raw("expert_vs_top_desktop_HTML"),
                  }}
                  className="hidden md:flex gap-1"
                ></span>

                <span className="md:hidden flex gap-1">
                  <span className="font-bold">Top Barber</span> vs
                  <span className="font-bold">Expert</span>
                </span>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="max-w-[600px] flex flex-col gap-2 text-left items-start p-4">
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_01"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_02"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_03"),
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("expert_vs_top_04"),
                }}
              ></p>
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>
    </section>
  );
};

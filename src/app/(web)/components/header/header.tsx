"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button, Tooltip } from "@nextui-org/react";
import { RiInstagramFill, RiTiktokFill, RiPhoneFill } from "@remixicon/react";

import { AppPath, AppLink } from "@/common/enums";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed px-4 py-4 w-full z-30 transition-all ${
        scrolled ? "bg-black bg-opacity-80 backdrop-blur-sm shadow" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={AppPath.HOME}
          className="shrink-0"
          aria-label="Головна сторінка"
        >
          <Image
            width={130}
            height={25}
            alt="Логотип Rowdy"
            src="/images/logo-white.png"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link
              href={AppLink.INSTAGRAM}
              target="_blank"
              aria-label="Інстаграм профіль Rowdy Barbershop"
              className="text-white hover:text-gray-300 transition"
            >
              <RiInstagramFill />
            </Link>

            <Link
              href={AppLink.TIK_TOK}
              target="_blank"
              aria-label="Тік-Ток профіль Rowdy Barbershop"
              className="text-white hover:text-gray-300 transition"
            >
              <RiTiktokFill />
            </Link>

            <Link
              href="tel:380663372763"
              target="_blank"
              aria-label="Зателефонувати адміністратору"
              className="text-white md:hidden"
            >
              <RiPhoneFill />
            </Link>
          </div>

          <Tooltip
            showArrow={true}
            content={
              <div className="px-1 py-2">
                <div className="text-small font-bold uppercase">
                  Години роботи
                </div>
                <div className="">10:00 - 20:00</div>
              </div>
            }
          >
            <div className="items-center gap-2 hidden md:flex">
              <Link href="tel:380663372763" target="_blank">
                <Button radius="full" variant="bordered" className="text-white">
                  +38 (066) 337 2763
                </Button>
              </Link>

              <Link href="tel:380687710337" target="_blank">
                <Button radius="full" variant="bordered" className="text-white">
                  +38 (068) 771 0337
                </Button>
              </Link>
            </div>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

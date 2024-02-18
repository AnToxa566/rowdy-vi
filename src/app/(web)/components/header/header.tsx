"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button, Tooltip } from "@nextui-org/react";
import {
  RiInstagramFill,
  RiTiktokFill,
  RiPhoneFill,
  RiTelegramFill,
} from "@remixicon/react";

import { AppPath, AppLink } from "@/common/enums";

import styles from "./styles.module.scss";

export const Header = () => {
  const links = [
    { label: "Послуги", href: AppPath.HOME_SERVICES },
    { label: "Барбери", href: AppPath.HOME_MASTERS },
    { label: "Галерея", href: AppPath.HOME_GALLERY },
    { label: "Про нас", href: AppPath.HOME_ABOUT },
    { label: "Контакти", href: AppPath.HOME_CONTACTS },
  ];

  const [scrolled, setScrolled] = useState<boolean>(false);

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

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
      } ${menuOpened ? "bg-black bg-opacity-100" : ""}`}
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

        <div className="hidden items-center gap-4 xl:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-gray-300 text-white transition-colors uppercase whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

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
              href={AppLink.TELEGRAM}
              target="_blank"
              aria-label="Написати в Телеграм"
              className="text-white hover:text-gray-300 transition"
            >
              <RiTelegramFill />
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

          <button
            className={`${styles["header__burger"]} ${
              menuOpened ? styles["header__burger--active"] : ""
            }`}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <span></span>
            <span></span>
          </button>

          <div
            className={`${styles["header__burger-menu"]} ${
              menuOpened ? styles["header__burger-menu--active"] : ""
            }`}
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-gray-300 text-white transition-colors uppercase whitespace-nowrap"
                    onClick={() => setMenuOpened(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex items-center justify-center gap-2 md:hidden">
                  <Link href="tel:380663372763" target="_blank">
                    <Button
                      radius="full"
                      variant="bordered"
                      className="text-white"
                      onClick={() => setMenuOpened(false)}
                    >
                      +38 (066) 337 2763
                    </Button>
                  </Link>

                  <Link href="tel:380687710337" target="_blank">
                    <Button
                      radius="full"
                      variant="bordered"
                      className="text-white"
                      onClick={() => setMenuOpened(false)}
                    >
                      +38 (068) 771 0337
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

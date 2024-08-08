"use client";

import { useLocale, useTranslations } from "next-intl";
import { useContext, useEffect, useState } from "react";

import { Locale } from "@/common/enums";
import { useOutsideClick } from "@/hooks";
import { ModalContext } from "@/app/providers";

import {
  LanguageSelector,
  Logo,
  NavLinks,
  NavPhones,
  NavSocials,
  RuLangModal,
} from ".";

import styles from "./styles.module.scss";

export const Header = () => {
  const locale = useLocale();

  const t = useTranslations("shared");

  const { onClose, handleModal } = useContext(ModalContext);

  const menuRef = useOutsideClick(() => setMenuOpened(false));

  const [scrolled, setScrolled] = useState<boolean>(false);

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const openLangModal = () => {
    handleModal({
      content: <RuLangModal onCancel={onClose} />,
    });
  };

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

    if (locale === Locale.RU) {
      openLangModal();
    }

    return () => removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed px-4 sm:px-8 py-4 w-full z-40 transition-all ${
        scrolled && !menuOpened
          ? "bg-black bg-opacity-80 backdrop-blur-sm shadow"
          : ""
      } ${menuOpened ? "bg-black" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden xl:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <NavSocials />

          <div className="hidden md:block">
            <NavPhones />
          </div>

          <div className="hidden xl:block">
            <LanguageSelector />
          </div>

          <div
            ref={menuRef}
            className={`${styles["header__menu"]} ${
              menuOpened ? styles["header__menu--active"] : ""
            }`}
          >
            <button
              aria-label={t("menu")}
              className={styles["header__menu-burger"]}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <span></span>
              <span></span>
            </button>

            <div className={styles["header__menu-dropdown"]}>
              <div className="container mx-auto flex flex-col gap-6">
                <NavLinks
                  variant="vertical"
                  onClick={() => setMenuOpened(false)}
                />

                <div className="md:hidden w-full h-[1px] bg-white bg-opacity-30"></div>

                <div className="md:hidden">
                  <NavPhones onClick={() => setMenuOpened(false)} />
                </div>

                <div className="xl:hidden w-full h-[1px] bg-white bg-opacity-30"></div>

                <div className="xl:hidden">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

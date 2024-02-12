import Link from "next/link";
import Image from "next/image";

import { Button } from "@nextui-org/react";
import { RiInstagramFill, RiTiktokFill, RiPhoneFill } from "@remixicon/react";

import { AppPath, AppLink } from "@/common/enums";

export const Header = () => {
  return (
    <header className="fixed px-4 py-4 w-full z-20">
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

            <Link href="tel:380663372763" target="_blank" className="md:hidden">
              <RiPhoneFill />
            </Link>
          </div>

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
        </div>
      </div>
    </header>
  );
};

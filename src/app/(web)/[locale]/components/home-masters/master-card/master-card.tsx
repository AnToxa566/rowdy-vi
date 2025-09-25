import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";
import { RiCalendarFill, RiInstagramFill } from "@remixicon/react";

import styles from "./styles.module.scss";

export interface Master {
  imageSrc: string;
  name: string;
  graduation: string;
  instagramLink: string;
  altegioLink: string;
}

export interface MasterCardProps {
  master: Master;
}

export const MasterCard: FC<MasterCardProps> = ({ master }) => {
  const t = useTranslations();

  return (
    <div
      className={`relative rounded-xl overflow-hidden min-w-[300px] w-full aspect-[3/5] cursor-pointer drop-shadow-md ${styles["master-card"]}`}
    >
      <Image
        width={300}
        height={500}
        alt={master.name}
        src={master.imageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["master-card__image"]}`}
      />

      <div
        className={`absolute bottom-0 left-0 w-full h-40 z-10 bg-gradient-to-t from-black to-transparent`}
      ></div>

      <div className="absolute z-20 bottom-0 left-0 p-3 text-white flex flex-col w-full">
        <span className="text-2xl font-semibold">{master.name}</span>
        <span className="text-base font-normal">{master.graduation}</span>

        <div
          className={`text-sm font-extralight mt-1 flex flex-col gap-1 w-full ${styles["master-card__actions"]}`}
        >
          <Link href={master.altegioLink} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              startContent={<RiCalendarFill size={16} />}
              className="bg-[#e62621] w-full"
            >
              {t("shared.booking")}
            </Button>
          </Link>

          <Link href={master.instagramLink} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              startContent={<RiInstagramFill size={16} />}
              className="bg-black w-full"
            >
              Instagram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

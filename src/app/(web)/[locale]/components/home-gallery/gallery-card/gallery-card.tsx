import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

export interface GalleryCardProps {
  imageSrc: string;
}

export const GalleryCard: FC<GalleryCardProps> = ({ imageSrc }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden w-full aspect-[4/5] ${styles["gallery-card"]}`}
    >
      <Image
        width={500}
        height={835}
        src={imageSrc}
        alt="Зображення з Instagram профілю Rowdy Barbershop"
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["gallery-card__image"]}`}
      />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 ${styles["gallery-card__backdrop"]}`}
      ></div>
    </div>
  );
};

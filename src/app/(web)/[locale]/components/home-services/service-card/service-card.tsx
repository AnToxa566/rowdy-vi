import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

export interface Service {
  label: string;
  imageSrc: string;
  price: number;
}

export interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const t = useTranslations("home.services");

  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full aspect-[4/5] cursor-pointer ${styles["service-card"]}`}
    >
      <Image
        width={500}
        height={835}
        alt={service.label}
        src={service.imageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["service-card__image"]}`}
      />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 bg-black opacity-60 ${styles["service-card__backdrop"]}`}
      ></div>

      <div className="absolute z-20 bottom-0 left-0 p-3 text-white flex flex-col">
        <span className="text-2xl font-semibold">{service.label}</span>
        <span className="text-base font-extralight">
          {t("cards.price_from", { price: service.price })}
        </span>
      </div>
    </div>
  );
};

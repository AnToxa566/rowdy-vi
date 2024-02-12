import { FC } from "react";
import Image from "next/image";

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
  return (
    <div
      className={`relative overflow-hidden rounded-xl w-[200px] min-w-[200px] h-[240px] cursor-pointer ${styles["service-card"]}`}
    >
      <Image
        unoptimized
        width={200}
        height={240}
        src={service.imageSrc}
        alt="Чоловіча стрижка"
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["service-card__image"]}`}
      />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 bg-black opacity-60 ${styles["service-card__backdrop"]}`}
      ></div>

      <div className="absolute z-20 bottom-0 left-0 p-3 text-white flex flex-col">
        <span className="font-semibold">{service.label}</span>
        <span className="text-sm font-extralight">Від {service.price} грн</span>
      </div>
    </div>
  );
};

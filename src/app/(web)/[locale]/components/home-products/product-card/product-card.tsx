import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

export interface Product {
  label: string;
  price: number;
  imageSrc: string;
}

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const t = useTranslations("home.products");

  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full aspect-[4/5] cursor-pointer ${styles["service-card"]}`}
    >
      <Image
        width={500}
        height={835}
        alt={product.label}
        src={product.imageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["service-card__image"]}`}
      />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 bg-black opacity-60 ${styles["service-card__backdrop"]}`}
      ></div>

      <div className="absolute z-20 bottom-0 left-0 p-3 text-white flex flex-col">
        <span className="text-2xl font-semibold">{product.label}</span>
        <span className="text-base font-extralight">
          {t("cards.price", { price: product.price })}
        </span>
      </div>
    </div>
  );
};

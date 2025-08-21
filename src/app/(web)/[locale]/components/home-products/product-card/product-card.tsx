import { FC } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import { Product } from "@/common/models";

import styles from "./styles.module.scss";

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const locale = useLocale();
  const t = useTranslations("home.products");
  
  const label = product.label[locale as keyof typeof product.label] || product.label.en;

  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full aspect-[4/5] ${styles["service-card"]}`}
    >
      <Image
        alt={label}
        width={500}
        height={835}
        src={product.imageSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover ${styles["service-card__image"]}`}
      />

      <div
        className={`absolute bottom-0 left-0 w-full h-24 z-10 bg-gradient-to-t from-black to-transparent`}
      ></div>

      <div className="absolute z-20 bottom-0 left-0 p-3 text-white flex flex-col">
        <span className="text-2xl font-semibold">{label}</span>

        <span className="text-base font-extralight">
          {t("cards.price", { price: product.price })}
        </span>
      </div>
    </div>
  );
};

"use client";

import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

import { Product } from "@/common/models";

import { Carousel } from "../carousel";
import { SectionContainer } from "../section-container";

import { ProductCard } from "./product-card";

interface HomeProductsProps {
  products: Product[];
}

export const HomeProducts = ({ products }: HomeProductsProps) => {
  const t = useTranslations("home.products");

  const handleActionClick = (): void => {
    alert("hello");
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <SectionContainer id="products">
      <Carousel
        title={t("title")}
        description={t("description")}
        // actionOpt={{
        //   label: t("show_more"),
        // }}
        // onActionClick={handleActionClick}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Carousel>
    </SectionContainer>
  );
};

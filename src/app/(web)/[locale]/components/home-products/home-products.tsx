"use client";

import { SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

import { Carousel } from "../carousel";
import { SectionContainer } from "../section-container";

import { Product, ProductCard } from ".";

export const HomeProducts = () => {
  const t = useTranslations("home.products");

  const products: Product[] = [
    {
      label: t("cards.aftershave"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 350,
    },
    {
      label: t("cards.beard_wax"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 350,
    },
    {
      label: t("cards.styling_paste"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 450,
    },
    {
      label: t("cards.beard_oil"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 350,
    },
    {
      label: t("cards.daily_shampoo"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 350,
    },
    {
      label: t("cards.aftershave"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 350,
    },
    {
      label: t("cards.matte_paste"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 500,
    },
    {
      label: t("cards.beard_balm"),
      imageSrc: "/images/products/aftershave.jpg",
      price: 750,
    },
  ];

  const handleActionClick = (): void => {
    alert("hello");
  }

  return (
    <SectionContainer id="products">
      <Carousel
        title={t("title")}
        actionOpt={{
          label: t("show_more"),
        }}
        onActionClick={handleActionClick}
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

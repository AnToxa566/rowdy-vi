"use client";

import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { AppLink } from "@/common/enums";

import { GalleryCard } from "..";
import { Carousel } from "../../carousel";

export interface GalleryCarouselProps {
  title: string;
  actionTitle: string;
}

export const GalleryCarousel: FC<GalleryCarouselProps> = ({
  title,
  actionTitle,
}) => {
  const photos = [
    { src: "/images/gallery/01.jpg" },
    { src: "/images/gallery/02.jpg" },
    { src: "/images/gallery/03.jpg" },
    { src: "/images/gallery/04.jpg" },
    { src: "/images/gallery/05.jpg" },
    { src: "/images/gallery/06.jpg" },
    { src: "/images/gallery/07.jpg" },
    { src: "/images/gallery/08.jpg" },
    { src: "/images/gallery/09.jpg" },
  ];

  return (
    <Carousel
      title={title}
      actionOpt={{
        label: actionTitle,
        href: AppLink.INSTAGRAM,
        target: "_blank",
      }}
    >
      {photos.map((photo, idx) => (
        <SwiperSlide key={idx}>
          <GalleryCard imageSrc={photo.src} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

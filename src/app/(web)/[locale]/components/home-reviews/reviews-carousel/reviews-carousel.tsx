"use client";

import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { AppLink } from "@/common/enums";

import { ReviewCard } from "..";
import { Carousel } from "../../carousel";

export interface ReviewsCarouselProps {
  title: string;
  actionTitle: string;
}

export const ReviewsCarousel: FC<ReviewsCarouselProps> = ({
  title,
  actionTitle,
}) => {
  const photos = [
    { src: "/images/reviews/01.png" },
    { src: "/images/reviews/02.png" },
    { src: "/images/reviews/03.png" },
    { src: "/images/reviews/04.png" },
    { src: "/images/reviews/05.png" },
  ];

  return (
    <Carousel
      title={title}
      actionOpt={{
        label: actionTitle,
        href: AppLink.GOOGLE_REVIEWS,
        target: "_blank",
      }}
    >
      {photos.map((photo, idx) => (
        <SwiperSlide key={idx}>
          <ReviewCard imageSrc={photo.src} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

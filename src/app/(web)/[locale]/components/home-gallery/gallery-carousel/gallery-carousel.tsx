"use client";

import Link from "next/link";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Button } from "@nextui-org/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { GalleryCard } from "..";

export interface GalleryCarouselProps {
  title: string;
  actionTitle: string;
}

export const GalleryCarousel: FC<GalleryCarouselProps> = ({
  title,
  actionTitle,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

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

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
            {title}
          </h2>

          <Link href={AppLink.INSTAGRAM} target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              className="bg-[#e62621]"
            >
              {actionTitle}
            </Button>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            isIconOnly
            radius="full"
            color="primary"
            aria-label="Back"
            className="bg-[#e62621]"
            onClick={handlePrevClick}
          >
            <RiArrowDropLeftLine />
          </Button>

          <Button
            isIconOnly
            radius="full"
            color="primary"
            aria-label="Forward"
            className="bg-[#e62621]"
            onClick={handleNextClick}
          >
            <RiArrowDropRightLine />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={16}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <GalleryCard imageSrc={photo.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

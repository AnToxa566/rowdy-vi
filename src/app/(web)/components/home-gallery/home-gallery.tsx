"use client";

import Link from "next/link";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Button } from "@nextui-org/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { AppLink } from "@/common/enums";

import { GalleryCard } from ".";

export const HomeGallery = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const photos = [
    { src: "/images/gallery/01.jpg", title: "Test 1" },
    { src: "/images/gallery/02.jpg", title: "Test 2" },
    { src: "/images/gallery/03.jpg", title: "Test 3" },
    { src: "/images/gallery/04.jpg", title: "Test 4" },
    { src: "/images/gallery/05.jpg", title: "Test 5" },
    { src: "/images/gallery/06.jpg", title: "Test 6" },
  ];

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <section className="py-10 px-4" id="gallery">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              ГАЛЕРЕЯ
            </h2>

            <Link href={AppLink.INSTAGRAM} target="_blank">
              <Button
                size="sm"
                radius="full"
                color="primary"
                className="bg-[#e62621]"
              >
                Більше в Instagram
              </Button>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              isIconOnly
              radius="full"
              color="primary"
              aria-label="Вліво"
              className="bg-[#e62621]"
              onClick={handlePrevClick}
            >
              <RiArrowDropLeftLine />
            </Button>

            <Button
              isIconOnly
              radius="full"
              color="primary"
              aria-label="Вправо"
              className="bg-[#e62621]"
              onClick={handleNextClick}
            >
              <RiArrowDropRightLine />
            </Button>
          </div>
        </div>

        <div>
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
            {photos.map((photo) => (
              <SwiperSlide key={photo.title}>
                <GalleryCard imageSrc={photo.src} altLabel={photo.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

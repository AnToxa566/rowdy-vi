"use client";

import Link from "next/link";
import { Swiper, SwiperRef } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FC, HTMLAttributeAnchorTarget, useRef } from "react";

import { Button } from "@nextui-org/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";

import { CarouselActionButton } from "./carousel-action-button";

export interface CarouselActionOpt {
  label: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export interface CarouselProps {
  title: string;
  description?: string;
  actionOpt?: CarouselActionOpt;
  children: React.ReactNode;
  onActionClick?: () => void;
}

export const Carousel: FC<CarouselProps> = ({
  title,
  description,
  actionOpt,
  children,
  onActionClick,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-4 justify-between w-full md:justify-start md:w-auto">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
              {title}
            </h2>

            {actionOpt &&
              (actionOpt.href ? (
                <Link href={actionOpt.href} target={actionOpt.target}>
                  <CarouselActionButton
                    label={actionOpt.label}
                    onClick={onActionClick}
                  />
                </Link>
              ) : (
                <CarouselActionButton
                  label={actionOpt.label}
                  onClick={onActionClick}
                />
              ))}
          </div>

          {description && (
            <p className="text-gray-500 text-lg leading-5 font-semibold">{description}</p>
          )}
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
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

import { useTranslations } from "next-intl";

import {
  RiHotelLine,
  RiInkBottleLine,
  RiUserHeartLine,
  RiVerifiedBadgeLine,
} from "@remixicon/react";

import { Feature, FeatureCard } from ".";

export const HomeFeatures = () => {
  const t = useTranslations("home.features");

  const features: Feature[] = [
    {
      title: t("cards.01.title"),
      description: t("cards.01.description"),
      icon: <RiVerifiedBadgeLine />,
      imageSrc: "/images/features/masters.jpg",
    },
    {
      title: t("cards.02.title"),
      description: t("cards.02.description"),
      icon: <RiUserHeartLine />,
      imageSrc: "/images/features/service.jpg",
    },
    {
      title: t("cards.03.title"),
      description: t("cards.03.description"),
      icon: <RiInkBottleLine />,
      imageSrc: "/images/features/cosmetics.jpg",
    },
    {
      title: t("cards.04.title"),
      description: t("cards.04.description"),
      icon: <RiHotelLine />,
      imageSrc: "/images/features/map.jpg",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-10 px-4 sm:px-8 bg-white z-30"
    >
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
          {t("title")}
        </h2>

        <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

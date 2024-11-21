import { useTranslations } from "next-intl";

import { SectionContainer } from "../section-container";

import { GalleryCarousel } from ".";

export const HomeGallery = () => {
  const t = useTranslations("home.gallery");

  return (
    <SectionContainer id="gallery">
      <GalleryCarousel title={t("title")} actionTitle={t("instagram")} />
    </SectionContainer>
  );
};

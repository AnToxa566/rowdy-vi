import { useTranslations } from "next-intl";

import { Container } from "../container";

import { GalleryCarousel } from ".";

export const HomeGallery = () => {
  const t = useTranslations("home.gallery");

  return (
    <Container id="gallery">
      <GalleryCarousel title={t("title")} actionTitle={t("instagram")} />
    </Container>
  );
};

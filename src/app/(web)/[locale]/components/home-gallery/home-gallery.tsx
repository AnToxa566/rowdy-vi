import { useTranslations } from "next-intl";

import { GalleryCarousel } from ".";

export const HomeGallery = () => {
  const t = useTranslations("home.gallery");

  return (
    <section className="relative z-30 py-10 px-4 bg-white" id="gallery">
      <div className="container mx-auto">
        <GalleryCarousel title={t("title")} actionTitle={t("instagram")} />
      </div>
    </section>
  );
};

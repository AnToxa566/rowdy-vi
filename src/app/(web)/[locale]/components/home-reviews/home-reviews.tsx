import { useTranslations } from "next-intl";

import { SectionContainer } from "../section-container";

import { ReviewsCarousel } from ".";

export const HomeReviews = () => {
  const t = useTranslations("home.reviews");

  return (
    <SectionContainer id="reviews">
      <ReviewsCarousel title={t("title")} actionTitle={t("leave_feedback")} />
    </SectionContainer>
  );
};

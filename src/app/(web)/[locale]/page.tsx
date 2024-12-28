import {
  HomeAbout,
  HomeContacts,
  HomeFAQ,
  HomeFeatures,
  HomeGallery,
  HomeHero,
  HomeMasters,
  HomePrices,
  HomeReviews,
  HomeServices,
} from "./components";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomePrices />
      <HomeServices />
      <HomeMasters />
      <HomeGallery />
      <HomeAbout />
      <HomeReviews />
      <HomeContacts />
      <HomeFAQ />
    </>
  );
}

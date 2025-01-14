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

      <div className="rounded-t-3xl overflow-hidden -mt-6">
        <HomeFeatures />
      </div>

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

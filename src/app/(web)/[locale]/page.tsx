import {
  HomeAbout,
  HomeContacts,
  HomeFeatures,
  HomeGallery,
  HomeHero,
  HomeMasters,
  HomeServices,
} from "./components";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomeMasters />
      <HomeGallery />
      <HomeAbout />
      <HomeContacts />
    </>
  );
}

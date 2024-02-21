import {
  HomeAbout,
  HomeContacts,
  HomeGallery,
  HomeHero,
  HomeMasters,
  HomeServices,
} from "./components";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeMasters />
      <HomeGallery />
      <HomeAbout />
      <HomeContacts />
    </>
  );
}

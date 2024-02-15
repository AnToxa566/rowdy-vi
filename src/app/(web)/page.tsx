import {
  HomeContacts,
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
      <HomeContacts />
    </>
  );
}

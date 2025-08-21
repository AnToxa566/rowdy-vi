import { Product } from "@/common/models";
import { productsService } from "@/services/products.service";

import {
  HomeAbout,
  HomeContacts,
  HomeFAQ,
  HomeFeatures,
  HomeGallery,
  HomeHero,
  HomeMasters,
  HomePrices,
  HomeProducts,
  HomeReviews,
  HomeServices,
} from "./components";

export default async function HomePage() {
  let products: Product[] = [];

  try {
    const productsResult = await productsService.findAll();
    products = productsResult.data || [];
  } catch (error) {
    products = [];
  }

  return (
    <>
      <HomeHero />

      <div className="rounded-t-3xl overflow-hidden -mt-6">
        <HomeProducts products={products} />
      </div>

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

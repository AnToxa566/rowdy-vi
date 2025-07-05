import { BaseModel } from "..";

export interface Product extends BaseModel {
  slug: string;
  label: {
    en: string;
    ru: string;
    uk: string;
  };
  price: number;
  count: number;
  imageSrc: string;
}

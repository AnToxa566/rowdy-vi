export interface CreateProductDto {
  label: {
    en: string;
    ru: string;
    uk: string;
  };
  price: number;
  count: number;
  imageSrc: string;
}

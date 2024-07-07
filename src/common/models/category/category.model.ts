import { BaseModel } from "..";

export interface Category extends BaseModel {
  name: string;
  slug: string;
  order?: number;
  color?: string;
}

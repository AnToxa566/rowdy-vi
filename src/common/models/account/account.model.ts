import { BaseModel } from "..";

export interface Account extends BaseModel {
  name: string;
  sum: number;
  color?: string;
}

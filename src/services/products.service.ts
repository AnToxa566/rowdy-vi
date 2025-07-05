import { ApiBaseService } from "@/services";
import { ApiEndPoint } from "@/common/enums";
import {
  Product,
  CreateProductDto,
  UpdateProductDto,
} from "@/common/models";

export class ProductsService extends ApiBaseService<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  constructor() {
    super(ApiEndPoint.PRODUCTS);
  }
}

export const productsService = new ProductsService();

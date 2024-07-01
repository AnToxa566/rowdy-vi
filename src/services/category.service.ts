import { ApiBaseService } from "@/services";
import { ApiEndPoint } from "@/common/enums";
import {
  Category,
  CreateCategoryDto,
  UpdateCategoryDto,
} from "@/common/models";

export class CategoryService extends ApiBaseService<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor() {
    super(ApiEndPoint.CATEGORIES);
  }
}

export const categoryService = new CategoryService();

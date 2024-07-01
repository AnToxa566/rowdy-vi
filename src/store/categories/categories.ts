import { fetchCategories } from "./categories.actions";
import { сategoriesActions } from "./categories.slice";

const allActions = {
  ...сategoriesActions,
  fetchCategories,
};

export { allActions as сategoriesActions };

export { сategoriesReducer, сategoriesName } from "./categories.slice";

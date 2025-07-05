import { createProduct, deleteProduct, fetchProducts, updateProduct } from "./products.actions";
import { productsActions } from "./products.slice";

const allActions = {
  ...productsActions,
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

export { allActions as productsActions };

export { productsReducer, productsName } from "./products.slice";

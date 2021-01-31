import axios from "axios";
import { CF_ROUTE_PRODUCT } from "../config/route";

function getProduct() {
  return axios
    .get(CF_ROUTE_PRODUCT.GET_ALL_PRODUCTS)

    .then((response) => {
      return response.data;
    });
}
const productService = {
  getProduct,
  //
};

export default productService;

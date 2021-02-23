import axios from "axios";
import { CF_ROUTE_PRODUCT } from "../config/route";

function getProduct() {
  return axios
    .get(CF_ROUTE_PRODUCT.GET_ALL_PRODUCTS)

    .then((response) => {
      return response.data;
    });
}

function getProductDetail(id) {
  return axios
    .get(`${CF_ROUTE_PRODUCT.GET_PRODUCT_DETAIL}/${id}`)

    .then((response) => {
      return response.data;
    });
}

function getSearchResult(value) {
  return axios
    .post(CF_ROUTE_PRODUCT.GET_SEARCH_RESULT, {
      searchTerm: value,
    })

    .then((respone) => {
      return respone.data;
    });
}

const productService = {
  getProduct,
  getProductDetail,
  getSearchResult,
  //
};

export default productService;

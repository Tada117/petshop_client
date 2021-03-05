import axios from "axios";
import { CF_ROUTE_CATEGORY, CF_ROUTE_PARENT_CATEGORY } from "../config/route";

function getCategories() {
  return axios
    .get(CF_ROUTE_CATEGORY.GET_CATEGORIES)

    .then((response) => {
      return response.data;
    });
}
function getParentCategories() {
  return axios
    .get(CF_ROUTE_PARENT_CATEGORY.GET_PARENT_CATEGORIES)

    .then((response) => {
      return response.data;
    });
}
const categoryService = {
  getCategories,
  getParentCategories,
};

export default categoryService;

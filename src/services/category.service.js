import axios from "axios";
import { CF_ROUTE_CATEGORY } from "../config/route";

function getCategories() {
  return axios
    .get(CF_ROUTE_CATEGORY.GET_CATEGORIES)

    .then((response) => {
      return response.data;
    });
}
const categoryService = {
  getCategories,
  //
};

export default categoryService;

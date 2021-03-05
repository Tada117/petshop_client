const API_URL = "http://localhost:5000";

export const CF_ROUTE_PRODUCT = {
  GET_ALL_PRODUCTS: `${API_URL}/api/products/allProducts`,
  GET_PRODUCT_DETAIL: `${API_URL}/api/products`,
  GET_SEARCH_RESULT: `${API_URL}/api/products/search`,
};
export const CF_ROUTE_CATEGORY = {
  GET_CATEGORIES: `${API_URL}/api/categories/`,
};
export const CF_ROUTE_USER = {
  REGISTER: `${API_URL}/api/customers/register`,
};
export const CF_ROUTE_PARENT_CATEGORY = {
  GET_PARENT_CATEGORIES: `${API_URL}/api/parentCategories/`,
};

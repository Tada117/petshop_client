export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const setActiveHobby = (id) => {
  return {
    type: "DELET_FROM_CART",
    payload: id,
  };
};

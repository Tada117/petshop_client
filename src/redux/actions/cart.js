export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const setActiveHobby = (id) => {
  return {
    type: "DELET_FROM_CART",
    payload: id,
  };
};

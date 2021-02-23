const initialState = {
  itemList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newList = [...state.itemList];
      newList.push(action.payload);
      return {
        ...state,
        itemList: newList,
      };
    }
    case "DELETE_FROM_CART": {
      const newList = [...state.itemList];
      newList.push(action.payload);
      return {
        ...state,
        itemList: newList,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

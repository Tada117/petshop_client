import {
  SHOW_CART,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_PRICE,
  DECREMENT_QTY,
} from "../actions/actionTypes";

const initialState = {
  itemList: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const isAlreadyAdded = state.itemList.find(
        (product) => product._id === action.payload._id
      ); // return true or false
      //case false
      // if (!isAlreadyAdded) action.payload.cartCounter = 1;
      return {
        ...state,
        itemList: !isAlreadyAdded
          ? // return this if !isAlreadyAdded
            [action.payload, ...state.itemList]
          : //return this if isAdded
            state.itemList.map((item) =>
              item._id === action.payload._id
                ? { ...item, cartCounter: ++item.cartCounter }
                : item
            ),
        // totalPrice: state.itemList.reduce(
        //   (acc, val) => acc + val.cartCounter * val.price,
        //   0
        // ),
      };
    }

    case DECREMENT_QTY: {
      return {
        ...state,
        itemList: state.itemList.map((item) =>
          item._id === action.payload._id
            ? { ...item, cartCounter: --item.cartCounter }
            : item
        ),
        // totalPrice: state.itemList.reduce(
        //   (acc, val) => acc + val.cartCounter * val.price,
        //   0
        // ),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        itemList: state.itemList.filter((item) => item._id !== action.payload),
      };
    }
    case UPDATE_PRICE: {
      return {
        ...state,
        totalPrice: state.itemList
          .reduce((acc, val) => acc + val.cartCounter * val.price, 0)
          .toFixed(2),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

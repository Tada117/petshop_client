import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrementQty, deleteItem } from "../../redux/actions/cart";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  // const handleDecrQty = (item) => {
  //   dispatch(decrementQty(item));
  //   console.log(item);
  // };
  const handleIncrQty = (item) => {
    dispatch(addItem(item));
  };
  const handleDecrQty = (item) => {
    item.cartCounter > 1
      ? dispatch(decrementQty(item))
      : dispatch(deleteItem(item._id));
  };

  // if (item.cartCounter > 1) {
  //   dispatch(decrementQty(item));
  // } else {
  //   dispatch(deletItem(item));
  // }
  return (
    <>
      {cartItem.itemList.map((item) => (
        <div className="cart__item">
          <div className="item__image center-text">
            <img src={`http://localhost:5000/${item.imageUrl}`} alt="" />
          </div>
          <div className="item__name center-text ">{item.name}</div>
          <div className="item__counter center-text">
            <div className="btn-qty" onClick={() => handleIncrQty(item)}>
              +
            </div>
            {item.cartCounter}
            <div className="btn-qty" onClick={() => handleDecrQty(item)}>
              -
            </div>
          </div>
          <div className="item__price center-text">{item.price}</div>
        </div>
      ))}
    </>
  );
}

export default CartItem;

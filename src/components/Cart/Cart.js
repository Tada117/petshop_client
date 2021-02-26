import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useSelector } from "react-redux";

function Cart() {
  // const [cartItem, setCartItem] = useState([]);
  const itemList = useSelector((state) => state.cart);

  useEffect(() => {
    if (itemList) {
      return itemList;
    }
  }, [itemList]);
  console.log("itemList in Cart cpn:", itemList);
  return (
    <div className="page">
      <div className="cart__container">
        <div>
          <CartItem cartItem={itemList} />
        </div>
        <div className="cart__total">Total{itemList.totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart;

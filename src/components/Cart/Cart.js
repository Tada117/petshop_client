import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const itemList = useSelector((state) => state.cart.itemList);

  useEffect(() => {
    if (itemList) {
      setCartItem(itemList);
    }
  }, [itemList]);
  //   console.log("itemList in Cart cpn:", itemList);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {console.log("itemList in Cart cpn:", { itemList })}
      {console.log(itemList)}
      <CartItem cartItem={cartItem} />
    </div>
  );
}

export default Cart;

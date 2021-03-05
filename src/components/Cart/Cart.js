import React, { useEffect } from "react";
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

  return (
    <div className="page">
      {itemList.itemList.length === 0 ? (
        <div className="cart__empty">Cart is empty</div>
      ) : (
        <div className="cart__container">
          <div className="cart-item__container">
            <CartItem cartItem={itemList} />
          </div>

          <div className="cart__total">Total{itemList.totalPrice}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;

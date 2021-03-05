import React, { useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Cart() {
  // const [cartItem, setCartItem] = useState([]);
  const itemList = useSelector((state) => state.cart);

  useEffect(() => {
    if (itemList) {
      return itemList;
    }
  }, [itemList]);

  const history = useHistory();
  const handleContinueShopping = () => history.push("/");

  return (
    <div className="page">
      {itemList.itemList.length === 0 ? (
        <div className="cart__empty">
          <h1>Cart is currently empty</h1>
          <h3>Look like you have no items in your shopping cart</h3>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      ) : (
        <div className="cart__container">
          <div className="cart-item__container">
            <CartItem cartItem={itemList} />
          </div>

          <div className="cart__total">
            <h2>Cart Total</h2>

            <span>Total: {itemList.totalPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

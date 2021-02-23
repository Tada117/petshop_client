import React from "react";

function CartItem({ cartItem }) {
  return (
    <div>
      <ul>
        {cartItem.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartItem;

import React from "react";
import cart from "./images/cart.png"

const CartWidget = () => {
  return (
    <a className="bg-light position-absolute top-0 end-0" href=" ">
      <img src={cart} alt="" />
    </a>
  );
};

export default CartWidget;
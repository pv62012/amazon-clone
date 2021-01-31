import React from "react";
import "../style/Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.unsplash.com/photo-1546865892-a9de1f73692e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80"
          alt="ad"
        />
        <div>
          <h2 className="checkout_title">Your Shoping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">I am here On right</div>
    </div>
  );
}

export default Checkout;

import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img src="/images/amazon.png" alt="" className="header_logo" />
      <div className="header_search">
        <input
          className="header_searchinput"
          type="text"
          placeholder="Search for products"
        />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello guest</span>
          <span className="header_option_line_two">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Return</span>
          <span className="header_option_line_two">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon className="header_add_cart_icon" />
        <span className="header_option_line_two header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;

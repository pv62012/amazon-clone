import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
   }
 }
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/amazon.png" alt="" className="header_logo" />
      </Link>

      <div className="header_search">
        <input
          className="header_searchinput"
          type="text"
          placeholder="Search for products"
        />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <Link  to="/login" >
          <div className="header_option" onClick={handleAuthentication}>
              <span className="header_option_line_one">Hello guest </span>
              <span className="header_option_line_two">{user?'Sign out':'Signin'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_line_one">Return</span>
          <span className="header_option_line_two">& Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="header_add_cart_icon" />
          <span className="header_option_line_two header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

import React from "react";
import { useStateValue } from "../state/StateProvider";
import "../style/Product.css";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;

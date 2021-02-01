import React from "react";
import "../style/Subtotal.css";
import Currencyformat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              subtotal (0 items):<strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

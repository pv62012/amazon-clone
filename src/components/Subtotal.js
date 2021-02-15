import React from "react";
import "../style/Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "../state/StateProvider";
import { getBasketTotal } from "../state/Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

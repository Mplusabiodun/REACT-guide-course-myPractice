import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function () {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.reduce((totalPrice, item) => {
    totalPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal className="cart">
      <ul>
        {cartCtx.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}

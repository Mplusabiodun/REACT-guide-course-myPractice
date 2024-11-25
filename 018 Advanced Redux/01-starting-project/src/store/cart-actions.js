import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mplux-react-redux-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Couldn't fetch cart data.");
      }

      const data = response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotificaton({
          status: "error",
          title: "Error!",
          message: "Sending card data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotificaton({
        status: "pending",
        title: "Sending...",
        message: "Sending card data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://mplux-react-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotificaton({
          status: "success",
          title: "Success!",
          message: "Sent card data sucessfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotificaton({
          status: "error",
          title: "Error!",
          message: "Sending card data failed",
        })
      );
    }
  };
};

import { GET_CARTS, CREATE_CART, DELETE_CART } from "../_actions/types";

const cartReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARTS:
      return payload;
    case CREATE_CART:
      console.log("payload : ", payload);
      console.log("payload.cart : ", payload.cart);
      return [...state, payload.cart];
    case DELETE_CART:
      return state.filter((cart) => {
        console.log("cart : ", cart);
        console.log("cart.cart_id : ", cart.cart_id);
        console.log("payload : ", payload);
        console.log("cart.cart_id !== payload : ", cart.cart_id !== payload);
        return cart.cart_id !== payload;
      });
    default:
      return state;
  }
};

export default cartReducer;

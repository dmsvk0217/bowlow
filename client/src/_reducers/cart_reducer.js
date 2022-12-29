import { GET_CARTS, CREATE_CART, DELETE_CART } from "../_actions/types";

const cartReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARTS:
      return payload;
    case CREATE_CART:
      return [...state, payload.cart];
    case DELETE_CART:
      return state.filter((cart) => {
        return cart.cart_id !== payload;
      });
    default:
      return state;
  }
};

export default cartReducer;

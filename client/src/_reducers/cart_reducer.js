import { GET_CARTS, CREATE_CART } from "../_actions/types";

const cartReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARTS:
      return payload;
    case CREATE_CART:
      return [...state, payload];
    default:
      return state;
  }
};

export default cartReducer;

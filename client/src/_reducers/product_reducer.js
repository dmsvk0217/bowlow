import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../_actions/types";

const productReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return payload;
    case CREATE_PRODUCT:
      return [...state, payload];
    case UPDATE_PRODUCT:
      return state;
    case DELETE_PRODUCT:
      return state;
    default:
      return state;
  }
};

export default productReducer;

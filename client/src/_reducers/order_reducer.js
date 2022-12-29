import { GET_ORDERS, CREATE_ORDER } from "../_actions/types";

function orderReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return payload;
    case CREATE_ORDER:
      //nothing
      return state;
    default:
      return state;
  }
}

export default orderReducer;

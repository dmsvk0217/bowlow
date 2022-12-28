import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  GET_COUNT_USER,
  ADD_COUNT_USER,
  INIT_COUNT_USER,
  SUB_COUNT_USER,
} from "../_actions/types";

function userReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: payload };
    case REGISTER_USER:
      return { ...state, registerSuccess: payload };
    case AUTH_USER:
      return {
        ...state,
        userData: payload,
      };
    case GET_COUNT_USER:
      return {
        ...state,
        cart_count: state.userData.user.cart_count,
      };
    case INIT_COUNT_USER:
      return {
        ...state,
        cart_count: 0,
      };
    case ADD_COUNT_USER: {
      return { ...state, cart_count: state.cart_count + 1 };
    }
    case SUB_COUNT_USER:
      return { ...state, cart_count: state.cart_count - 1 };
    default:
      return state;
  }
}

export default userReducer;

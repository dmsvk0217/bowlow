import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

function userReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: payload };
    case REGISTER_USER:
      console.log(
        "🚀 ~ file: user_reducer.js:4 ~ userReducer ~ payload",
        payload
      );
      return { ...state, registerSuccess: payload };
    case AUTH_USER:
      return { ...state, userData: payload };
    default:
      return state;
  }
}

export default userReducer;

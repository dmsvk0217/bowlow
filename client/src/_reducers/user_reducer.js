import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      console.log(
        "🚀 ~ file: user_reducer.js:4 ~ userReducer ~ action",
        action
      );
      return { ...state, registerSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}

export default userReducer;

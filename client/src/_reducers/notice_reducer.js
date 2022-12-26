import { GET_NOTICES, CREATE_NOTICE } from "../_actions/types";

function noticeReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTICES:
      return payload;
    case CREATE_NOTICE:
      return [...state, payload];
    default:
      return state;
  }
}

export default noticeReducer;

import { GET_NOTICES } from "../_actions/types";

function noticeReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTICES:
      return payload;
    default:
      return state;
  }
}

export default noticeReducer;

import { GET_NOTICES, CREATE_NOTICE, DELETE_NOTICE } from "../_actions/types";

function noticeReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTICES:
      return payload;
    case CREATE_NOTICE:
      return [...state, payload];
    case DELETE_NOTICE:
      console.log("[DELETE_NOTICE] id : ", payload.id);
      console.log("[DELETE_NOTICE] payload : ", payload);
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
}

export default noticeReducer;

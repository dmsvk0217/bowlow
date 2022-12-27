import {
  GET_NOTICES,
  CREATE_NOTICE,
  DELETE_NOTICE,
  UPDATE_NOTICE,
} from "../_actions/types";

function noticeReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTICES:
      return payload;
    case CREATE_NOTICE:
      return [...state, payload];
    case UPDATE_NOTICE:
      return state.map((notice) => {
        if (notice.id === payload.id) {
          notice.title = payload.dataTosubmit.title;
          notice.content = payload.dataTosubmit.content;
          return notice;
        } else {
          return notice;
        }
      });
    case DELETE_NOTICE:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
}

export default noticeReducer;

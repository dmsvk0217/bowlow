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
        if (notice.id == parseInt(payload.id)) {
          notice.title = payload.title;
          notice.content = payload.content;
          return notice;
          // return { ...notice, ...payload }; // 덮어씌운 객체 반환.
          // 왜 -> 얘는 안될까??
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

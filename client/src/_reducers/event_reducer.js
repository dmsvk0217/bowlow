import {
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../_actions/types";

const eventReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return payload;
    case CREATE_EVENT:
      return [...state, payload];
    case UPDATE_EVENT:
      return state.map((event) => {
        if (event.id == parseInt(payload.id)) {
          event.title = payload.title;
          event.content = payload.content;
          return event;
        } else {
          return event;
        }
      });
    case DELETE_EVENT:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

export default eventReducer;

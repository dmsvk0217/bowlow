import { GET_REVIEWS, CREATE_REVIEW } from "../_actions/types";

function reviewReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REVIEWS:
      return payload;
    case CREATE_REVIEW:
      return [...state, ...payload];
    default:
      return state;
  }
}

export default reviewReducer;

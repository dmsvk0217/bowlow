import axios from "axios";
import { GET_REVIEWS, CREATE_REVIEW } from "./types";

export function getReviews() {
  const request = axios
    .get("/api/review/", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: GET_REVIEWS,
    payload: request,
  };
}

export function createReview(dataTosubmit) {
  const request = axios
    .post("/api/review/", dataTosubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CREATE_REVIEW,
    payload: request,
  };
}

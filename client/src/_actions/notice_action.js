import axios from "axios";
import { GET_NOTICES, CREATE_NOTICE, DELETE_NOTICE } from "./types";

export function getNotices() {
  const request = axios
    .get("/api/notice/", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: GET_NOTICES,
    payload: request,
  };
}

export function createNotice(dataTosubmit) {
  const request = axios
    .post("/api/notice/", dataTosubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CREATE_NOTICE,
    payload: request,
  };
}

export function deleteNotice(id) {
  console.log("🚀 ~ file: notice_action.js:27 ~ deleteNotice ~ id", id);
  const request = axios
    .delete(`/api/notice/${id}`, { withCredentials: true })
    .then((response) => {
      console.log(
        "🚀 ~ file: notice_action.js:30 ~ .then ~ response",
        response
      );
      return response.payload;
    });

  return {
    type: DELETE_NOTICE,
    payload: { request, id },
  };
}

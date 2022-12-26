import axios from "axios";
import { GET_NOTICES, CREATE_NOTICE } from "./types";

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

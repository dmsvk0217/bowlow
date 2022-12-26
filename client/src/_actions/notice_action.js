import axios from "axios";
import { GET_NOTICES } from "./types";

export function getNotices() {
  const request = axios
    .get("/api/notice/", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: GET_NOTICES,
    payload: request,
  };
}

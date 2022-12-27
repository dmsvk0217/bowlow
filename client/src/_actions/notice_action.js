import axios from "axios";
import {
  GET_NOTICES,
  CREATE_NOTICE,
  DELETE_NOTICE,
  UPDATE_NOTICE,
} from "./types";

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
  const request = axios
    .delete(`/api/notice/${id}`, { withCredentials: true })
    .then((response) => response.payload);

  return {
    type: DELETE_NOTICE,
    payload: { request, id },
  };
}

export function updateNotice(id, dataTosubmit) {
  const request = axios
    .put(`/api/notice/${id}`, dataTosubmit, { withCredentials: true })
    .then((response) => response.payload);

  return {
    type: UPDATE_NOTICE,
    payload: { dataTosubmit, id },
  };
}

import { GET_EVENTS, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./types";
import axios from "axios";

export function getEvents() {
  const request = axios
    .get("/api/event/", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: GET_EVENTS,
    payload: request,
  };
}

export function createEvent(dataTosubmit) {
  const request = axios
    .post("/api/event/", dataTosubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CREATE_EVENT,
    payload: request,
  };
}

export function updateEvent(id, dataTosubmit) {
  const request = axios
    .put(`/api/event/${id}`, dataTosubmit, { withCredentials: true })
    .then((response) => response.payload);

  return {
    type: UPDATE_EVENT,
    payload: dataTosubmit,
  };
}

export function deleteEvent(id) {
  const request = axios
    .delete(`/api/event/${id}`, { withCredentials: true })
    .then((response) => response.payload);

  return {
    type: DELETE_EVENT,
    payload: { request, id },
  };
}

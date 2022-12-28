import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  CART_COUNT_USER,
  ADD_COUNT_USER,
  DELETE_COUNT_USER,
} from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/user/login", dataToSubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/user/register", dataToSubmit, { withCredentials: true })
    .then((response) => {
      console.log("🚀 ~ file: user_action.js:19 ~ .then ~ response", response);
      return response.data;
    });

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/user/auth", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function cartCountUser() {
  const request = axios
    .post("/api/user/cartCount", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CART_COUNT_USER,
    payload: request,
  };
}

export function addCountUser() {
  return {
    type: ADD_COUNT_USER,
    payload: null,
  };
}

export function deleteCountUser() {
  return {
    type: DELETE_COUNT_USER,
    payload: null,
  };
}

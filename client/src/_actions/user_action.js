import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  ADD_COUNT_USER,
  INIT_COUNT_USER,
  SUB_COUNT_USER,
  GET_COUNT_USER,
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
      console.log("๐ ~ file: user_action.js:19 ~ .then ~ response", response);
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

//store์ userDate -> cartcount state ๊ฐ์ ธ์ ์ค์ ํ๊ธฐ.
export function getCountUser() {
  return {
    type: GET_COUNT_USER,
    payload: null,
  };
}

//db user์ cart_count-=1 ์๋ฐ์ดํธ
export function addCountUser() {
  const request = axios
    .post("/api/user/cartCount", { type: 1 }, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: ADD_COUNT_USER,
    payload: null,
  };
}

//db user์ cart_count+=1 ์๋ฐ์ดํธ
export function subCountUser() {
  const request = axios
    .post("/api/user/cartCount", { type: -1 }, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: SUB_COUNT_USER,
    payload: null,
  };
}

export function initCountUser() {
  return {
    type: INIT_COUNT_USER,
    payload: null,
  };
}

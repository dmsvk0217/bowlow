import axios from "axios";
import { GET_ORDERS, CREATE_ORDER } from "./types";

export function getOrders() {
  const request = axios
    .get("/api/order/", { withCredentials: true })
    .then((response) => response.data);

  return {
    type: GET_ORDERS,
    payload: request,
  };
}

export function createOrder(dataTosubmit) {
  //createOrder 역할 :  1) createOrder 2) uesr db 장바구니 카운터 0으로 만들기 3) cart비우기.

  const request = axios
    .post("/api/order/", dataTosubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CREATE_ORDER,
    payload: request,
  };
}

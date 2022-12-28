import { GET_CARTS, CREATE_CART, DELETE_CART } from "./types";
import axios from "axios";

export function getCarts(user_id) {
  console.log("[!]getCarts");
  const request = axios
    .get(`/api/cart/${user_id}`, { withCredentials: true })
    .then((response) => {
      console.log("🚀 ~ file: cart_action.js:9 ~ .then ~ response", response);
      console.log(
        "🚀 ~ file: cart_action.js:9 ~ getCarts ~ response.data",
        response.data
      );
      return response.data;
    });

  return {
    type: GET_CARTS,
    payload: request,
  };
}

export function createCart(dataTosubmit) {
  const request = axios
    .post("/api/cart/", dataTosubmit, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: CREATE_CART,
    payload: request,
  };
}

export function deleteCart(cart) {
  console.log("🚀 ~ file: cart_action.js:27 ~ deleteCart ~ cart", cart);
  console.log(
    "🚀 ~ file: cart_action.js:32 ~ deleteCart ~ cart.cart_id",
    cart.cart_id
  );

  const request = axios
    .delete(`/api/cart/${cart.cart_id}`, { withCredentials: true })
    .then((response) => response.payload);

  return {
    type: DELETE_CART,
    payload: cart.cart_id,
  };
}

// export function updateEvent(id, dataTosubmit) {
//   const request = axios
//     .put(`/api/event/${id}`, dataTosubmit, { withCredentials: true })
//     .then((response) => response.payload);

//   return {
//     type: UPDATE_CART,
//     payload: dataTosubmit,
//   };
// }

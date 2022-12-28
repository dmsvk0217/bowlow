import { GET_CARTS, CREATE_CART } from "./types";
import axios from "axios";

export function getCarts(user_id) {
  const request = axios
    .get(`/api/cart/${user_id}`, { withCredentials: true })
    .then((response) => response.data);

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

// export function updateEvent(id, dataTosubmit) {
//   const request = axios
//     .put(`/api/event/${id}`, dataTosubmit, { withCredentials: true })
//     .then((response) => response.payload);

//   return {
//     type: UPDATE_CART,
//     payload: dataTosubmit,
//   };
// }

// export function deleteCart(cart) {
//   const request = axios
//     .delete(`/api/cart/${cart.id}`, { withCredentials: true })
//     .then((response) => response.payload);

//   return {
//     type: DELETE_CART,
//     payload: cart,
//   };
// }

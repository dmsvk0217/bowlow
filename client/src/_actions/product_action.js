import axios from "axios";
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./types";

export function getProduct(submitTodata) {
  const requset = axios
    .post(`/api/product/`, submitTodata, { withCredentials: true })
    .then((response) => {
      return response.data;
    });

  return {
    type: GET_PRODUCTS,
    payload: requset,
  };
}

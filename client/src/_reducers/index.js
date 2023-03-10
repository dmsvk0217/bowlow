import { combineReducers } from "redux";
import user from "../_reducers/user_reducer";
import notice from "./notice_reducer";
import event from "./event_reducer";
import product from "./product_reducer";
import cart from "./cart_reducer";
import order from "./order_reducer";
import review from "./review_reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["user", "notice", "event", "product", "review"], // target (reducer name)
};

const rootReducer = combineReducers({
  user,
  notice,
  event,
  product,
  cart,
  order,
  review,
});

export default persistReducer(persistConfig, rootReducer);

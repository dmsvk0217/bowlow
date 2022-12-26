import { combineReducers } from "redux";
import user from "../_reducers/user_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import notice from "./notice_reducer";

// config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["user", "notice"], // target (reducer name)
};

const rootReducer = combineReducers({
  user,
  notice,
});

export default persistReducer(persistConfig, rootReducer);

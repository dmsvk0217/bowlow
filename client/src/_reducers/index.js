import { combineReducers } from "redux";
import user from "../_reducers/user_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["user"], // target (reducer name)
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);

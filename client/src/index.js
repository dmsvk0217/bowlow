import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./_reducers/index";
import { applyMiddleware, createStore } from "redux";
import Reducethunk from "redux-thunk";
import ReducePromise from "redux-promise";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const store = applyMiddleware(Reducethunk, ReducePromise)(createStore)(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store); // persist store 내보내기

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

import registerRootComponent from "./node_modules/expo/build/launch/registerRootComponent";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

export default function RNRedux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

registerRootComponent(RNRedux);

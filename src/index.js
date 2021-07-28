import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "@/containers/App";
import { Provider } from "react-redux";
import ThemeProvider from "@/context/theme";

import store from "@/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

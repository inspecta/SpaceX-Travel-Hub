import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './redux/configureStore';
import Missions from "./components/missions/Missions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Missions />
    </React.StrictMode>
  </Provider>,
);

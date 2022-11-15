import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux';
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/missions/redux/store/Store";
import Missions from "./components/missions/Missions";
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <Missions />
  </React.StrictMode>
  </Provider>,
);

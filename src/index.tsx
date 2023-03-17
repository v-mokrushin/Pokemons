import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import App from "./components/App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stores";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// root.render(<App />);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

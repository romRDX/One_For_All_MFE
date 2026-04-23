import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { mockStoreApi } from "./mockStoreApi";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App storeApi={mockStoreApi} />
  </React.StrictMode>,
);

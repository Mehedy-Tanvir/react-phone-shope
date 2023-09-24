import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import myCreatedRoute from "./Router/Route";

export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ user: true }}>
      <RouterProvider router={myCreatedRoute} />
    </GlobalContext.Provider>
  </React.StrictMode>
);

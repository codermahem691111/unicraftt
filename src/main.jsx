import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="px-0 ">
    <React.StrictMode>
      <section className="font-Groteskt">
        <RouterProvider router={router} />
      </section>
    </React.StrictMode>
  </div>
);

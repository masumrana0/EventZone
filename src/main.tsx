import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./components/router/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

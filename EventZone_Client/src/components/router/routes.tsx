import { createBrowserRouter } from "react-router";

// Pages
import HomePage from "../pages/home/Home";
import RootLayout from "../layout/Layout";
import Events from "../pages/events/Events";
import AddEvent from "../pages/add-event/AddEvent";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import MyEvent from "../pages/my-events/MyEvent";
import UpdateEvent from "../pages/update-event/UpdateEvent";
import ProtectedRoute from "../shared/protector/protectorRoute";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },

      { path: "/login", Component: Login },
      { path: "/register", Component: Registration },

      {
        Component: ProtectedRoute,
        children: [
          { path: "/events", Component: Events },
          { path: "/add-event", Component: AddEvent },
          { path: "/my-events", Component: MyEvent },
          { path: "/update-event/:id", Component: UpdateEvent },
        ],
      },
    ],
  },
]);

export default router;

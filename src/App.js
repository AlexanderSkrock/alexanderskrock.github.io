import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root"
import MaintenancePage from "./maintenance/MaintenancePage";


const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        index: true,
        Component: MaintenancePage,
      },
      {
        path: "projects",
        Component: MaintenancePage,
      },
      {
        path: "knowledge",
        Component: MaintenancePage,
      },
      {
        path: "contact",
        Component: MaintenancePage,
      }
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

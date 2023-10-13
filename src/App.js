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
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

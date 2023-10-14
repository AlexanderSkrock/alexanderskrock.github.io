import React from 'react';
import { Route, Routes } from "react-router-dom";

import Root from "./Root"
import MaintenancePage from "./maintenance/MaintenancePage";
import { Projects } from 'grommet-icons';

const App = () => (
  <Routes>
    <Route Component={ Root }>
      <Route path="projects" Component={ Projects } />
      <Route path="knowledge" Component={ MaintenancePage } />
      <Route path="contact" Component={ MaintenancePage } />
      <Route index Component={ MaintenancePage } />
    </Route>
  </Routes>
);

export default App;

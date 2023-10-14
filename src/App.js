import React from 'react';
import { Route, Routes } from "react-router-dom";

import Root from "./Root"
import MaintenancePage from "./maintenance/MaintenancePage";

const App = () => (
  <Routes>
    <Route element={ <Root /> }>
      <Route index element={ <MaintenancePage /> } />
      <Route path="projects" element={ <MaintenancePage /> } />
      <Route path="knowledge" element={ <MaintenancePage /> } />
      <Route path="contact" element={ <MaintenancePage /> } />
      <Route path="*" element={ <MaintenancePage /> } />
    </Route>
  </Routes>
);

export default App;

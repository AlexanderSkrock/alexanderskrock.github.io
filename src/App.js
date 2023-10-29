import React from 'react';
import { Route, Routes } from "react-router-dom";

import Root from "./Root"
import MaintenancePage from "./maintenance/MaintenancePage";
import ProjectPage from './projects/ProjectPage';

const App = () => (
  <Routes>
    <Route element={ <Root /> }>
      <Route index element={ <MaintenancePage /> } />
      <Route path="projects" element={ <ProjectPage /> } />
      <Route path="knowledge" element={ <MaintenancePage /> } />
      <Route path="contact" element={ <MaintenancePage /> } />
      <Route path="*" element={ <MaintenancePage /> } />
    </Route>
  </Routes>
);

export default App;

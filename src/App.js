import React from 'react';
import { Route, Routes } from "react-router-dom";

import Root from "./Root"
import MaintenancePage from "./pages/maintenance/MaintenancePage";
import ProjectPage from './pages/projects/ProjectPage';
import ContactPage from './pages/contact/ContactPage';

const App = () => (
  <Routes>
    <Route element={ <Root /> }>
      <Route index element={ <MaintenancePage /> } />
      <Route path="projects" element={ <ProjectPage /> } />
      <Route path="knowledge" element={ <MaintenancePage /> } />
      <Route path="contact" element={ <ContactPage /> } />
      <Route path="*" element={ <MaintenancePage /> } />
    </Route>
  </Routes>
);

export default App;

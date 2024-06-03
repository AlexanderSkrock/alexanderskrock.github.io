import React from 'react';
import { Route, Routes } from "react-router-dom";

import Root from "./Root"
import ContactPage from './pages/contact/ContactPage';
import MaintenancePage from "./pages/maintenance/MaintenancePage";
import OssPage from './pages/oss/OssPage';
import ProfessionalExperiencesPage from './pages/professional/ProfessionalExperiencesPage';

const App = () => (
  <Routes>
    <Route element={ <Root /> }>
      <Route index element={ <MaintenancePage /> } />
      <Route path="experience" element={ <ProfessionalExperiencesPage /> } />
      <Route path="oss" element={ <OssPage /> } />
      <Route path="contact" element={ <ContactPage /> } />
      <Route path="*" element={ <MaintenancePage /> } />
    </Route>
  </Routes>
);

export default App;

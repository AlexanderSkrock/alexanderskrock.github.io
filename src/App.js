import React from 'react';
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

import MaintenancePage from "./maintenance/MaintenancePage";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
});

const App = () => (
  <Grommet theme={ theme } full>
    <MaintenancePage/>
  </Grommet>
);

export default App;

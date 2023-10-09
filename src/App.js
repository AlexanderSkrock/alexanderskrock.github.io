import React from 'react';
import { grommet, Grommet, Page, PageContent, PageHeader } from 'grommet';
import { deepMerge } from 'grommet/utils';

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

function App() {
  return (
    <Grommet theme={ theme } full>
      <Page>
        <PageContent>
          <PageHeader title="Under construction!" />
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;

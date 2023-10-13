import React from "react";
import styled from "styled-components";
import { Image, Page, PageContent } from "grommet";

import MaintenanceImage from "./maintenance.svg";

const ViewSizeImage = styled(Image)`
  max-width: 100vw;
  max-height: 100vh;
`;

const MaintenancePage = () => (
  <Page>
    <PageContent>
        <ViewSizeImage src={ MaintenanceImage } alt="Currently down for maintenance!" alignSelf="center" />
    </PageContent>
  </Page>
);

export default MaintenancePage;

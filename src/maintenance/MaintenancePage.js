import React from "react";
import styled from "styled-components";
import { Image, Page, PageContent } from "grommet";

import MaintenanceImage from "./maintenance.svg";
import { HEADER_HEIGHT } from "../constants";

const ViewSizeImage = styled(Image)`
  max-width: calc(100vw - ${HEADER_HEIGHT});
  max-height: calc(100vh - ${HEADER_HEIGHT});
`;

const MaintenancePage = () => {
  return (
    <Page>
      <PageContent>
        <ViewSizeImage src={ MaintenanceImage } alt="Currently down for maintenance!" alignSelf="center" />
      </PageContent>
    </Page>
  );
}

export default MaintenancePage;

import React, { useContext } from "react";
import { Image, Page, PageContent } from "grommet";

import MaintenanceImage from "./maintenance.svg";
import ConstantsContext from "../../ConstantsContext";

const MaintenancePage = () => {
  const { mainHeight } = useContext(ConstantsContext);
  return (
    <Page height={ mainHeight }>
      <PageContent>
        <Image src={ MaintenanceImage } alt="Currently down for maintenance!" fit="contain" />
      </PageContent>
    </Page>
  );
}

export default MaintenancePage;

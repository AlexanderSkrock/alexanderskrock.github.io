import React, { useContext } from "react";
import { Page, PageContent } from "grommet";

import ConstantsContext from "../ConstantsContext";
import Contacts from "./Contacts";

const ContactPage = () => {
    const { mainHeight } = useContext(ConstantsContext);
    return (
        <Page data-testid="contactPage">
            <PageContent
                height={ { min: mainHeight, max: mainHeight } }
                align="center"
                justify="around">
                <Contacts />
            </PageContent>
        </Page>
    );
}

export default ContactPage;

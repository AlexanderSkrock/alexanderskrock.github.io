import React from "react";
import { Page, PageContent } from "grommet";

import Contacts from "./Contacts";

const ContactPage = () => (
    <Page data-testid="contactPage" kind="full">
        <PageContent>
            <Contacts />
        </PageContent>
    </Page>
);

export default ContactPage;

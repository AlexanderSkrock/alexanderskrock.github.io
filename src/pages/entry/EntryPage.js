import React, { useContext } from "react";
import {Grid, Page, PageContent, ResponsiveContext} from "grommet";

import ProfessionalIntroductionCard from "./ProfessionalIntroductionCard";
import AnimalIntroductionCard from "./AnimalIntroductionCard";
import GamingIntroductionCard from "./GamingIntroductionCard";

const getResponsiveGridProps = (size) =>  {
    switch (size) {
        case "xsmall":
        case "small":
        case "medium":
            return {
                columns: ["full"],
            };
        case "large":
        default:
            return {
                columns: ["1/3", "1/3", "1/3"],
            };
    }
}

const ContactPage = () => {
    const size = useContext(ResponsiveContext);
    return (
        <Page data-testid="entryPage" kind="full">
            <PageContent>
                <Grid pad="small" gap="small" { ...getResponsiveGridProps(size) }>
                    <ProfessionalIntroductionCard />
                    <AnimalIntroductionCard />
                    <GamingIntroductionCard />
                </Grid>
            </PageContent>
        </Page>
    );
}

export default ContactPage;

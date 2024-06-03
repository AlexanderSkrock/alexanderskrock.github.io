import React from "react";
import { List, Page, PageContent } from "grommet";


import experiences from "../../config/generated/experiences";
import ExperienceCard from "./ExperienceCard";

const ProfessionalExperiencesPage = () => (
    <Page data-testid="professionalExperiencesPage" kind="full">
        <PageContent>
            <List data={ experiences }>
                {
                    (experience, index) => <ExperienceCard key={ `experience_${index}` } experience={ experience } />
                }
            </List>
        </PageContent>
    </Page>
);

export default ProfessionalExperiencesPage
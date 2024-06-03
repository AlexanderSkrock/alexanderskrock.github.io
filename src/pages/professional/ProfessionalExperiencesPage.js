import React, { useContext } from "react";
import { List, Page, PageContent, ResponsiveContext } from "grommet";


import experiences from "../../config/generated/experiences";
import ExperienceCard from "./ExperienceCard";

const ProfessionalExperiencesPage = () => {
    const size = useContext(ResponsiveContext);

    return (
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
}

export default ProfessionalExperiencesPage
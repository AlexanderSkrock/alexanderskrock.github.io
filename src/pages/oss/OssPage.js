import React, { useContext } from "react";
import { Grid, Page, PageContent, ResponsiveContext } from "grommet";

import ProjectCard from "../../components/ProjectCard";
import projects from "../../config/generated/oss-projects.json";

const getResponsiveGridProps = (size) =>  {
    switch (size) {
        case "xsmall":
        case "small":
            return {
                columns: ["full"],
            };
        case "medium":
            return {
                columns: ["1/2", "1/2"],
            };
        case "large":
            return {
                columns: ["1/3", "1/3", "1/3"],
            };
        default:
            return {
                columns: ["1/4", "1/4", "1/4", "1/4"],
            };
    }
}

const ProjectPage = () => {
    const size = useContext(ResponsiveContext);

    return (
        <Page data-testid="ossPage" kind="full">
            <PageContent>
                <Grid pad="small" gap="small" { ...getResponsiveGridProps(size) }>
                    { projects.map((p, i) => <ProjectCard key={ `project_${i}` } project={ p } />) }
                </Grid>
            </PageContent>
        </Page>
    );
}

export default ProjectPage;

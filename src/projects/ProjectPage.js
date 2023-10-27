import React, { useContext, useMemo } from "react";
import { Grid, Page, PageContent, ResponsiveContext } from "grommet";

import ProjectCard from "./ProjectCard";

import professionalProjects from "./professionalProjects";
import maintainerProjects from "./maintainerProjects";
import contributorProjects from "./contributorProjects";

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
        default:
            return {
                columns: ["1/4", "1/4", "1/4", "1/4"],
            };
    }
}

const ProjectPage = () => {
    const size = useContext(ResponsiveContext);
    const projects = useMemo(() => [...professionalProjects, ...maintainerProjects, ...contributorProjects], []);

    return (
        <Page kind="full">
            <PageContent>
                <Grid pad="small" gap="small" { ...getResponsiveGridProps(size) }>
                    { projects.map((p, i) => <ProjectCard key={ `project_${i}` } project={ p } />) }
                </Grid>
            </PageContent>
        </Page>
    );
}

export default ProjectPage;

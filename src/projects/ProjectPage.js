import React, { useContext } from "react";
import { Box, Grid, Page, PageContent, Heading, ResponsiveContext } from "grommet";

import ProjectCard from "./ProjectCard";

import professionalProjects from "./professionalProjects";
import maintainerProjects from "./maintainerProjects";
import contributorProjects from "./contributorProjects";

const getResponsiveGridProps = (size) =>  {
    switch (size) {
        case "xsmall":
        case "small":
            return {
                rows: ["auto", "auto", "auto"],
                columns: ["full"],
                gap: "small",
                areas: [
                    { name: "professional", start: [0, 0], end: [0, 0] },
                    { name: "maintainer", start: [0, 1], end: [0, 1] },
                    { name: "contributor", start: [0, 2], end: [0, 2] },
                ]
            }
        default:
            return {
                rows: ["auto", "auto"],
                columns: ["1/4", "1/4", "1/4", "1/4"],
                gap: "small",
                areas: [
                    { name: "professional", start: [0, 0], end: [1, 0] },
                    { name: "maintainer", start: [2, 0], end: [3, 0] },
                    { name: "contributor", start: [0, 1], end: [3, 1] },
                ]
            }
    }
}

const ProjectPage = () => {
    const size = useContext(ResponsiveContext);
    return (
        <Page>
            <PageContent>
                <Grid { ...getResponsiveGridProps(size) }>
                    <Box gridArea="professional" pad="small" gap="small">
                        <Heading>Professional</Heading>
                        <Box direction="row-responsive" flex pad="small" gap="small">
                            { professionalProjects.map((p, i) => <ProjectCard key={ `maintainerProject_${i}` } project={ p } size={ size } />) }
                        </Box>
                    </Box>
                    <Box gridArea="maintainer" pad="small" gap="small">
                        <Heading>Maintainer</Heading>
                        <Box direction="row-responsive" pad="small" gap="small">
                            { maintainerProjects.map((p, i) => <ProjectCard key={ `maintainerProject_${i}` } project={ p } size={ size } />) }
                        </Box>
                    </Box>
                    <Box gridArea="contributor" pad="small" gap="small">
                        <Heading>Contributor</Heading>
                        <Box direction="row-responsive" pad="small" gap="small">
                            { contributorProjects.map((p, i) => <ProjectCard key={ `maintainerProject_${i}` } project={ p } size={ size } />) }
                        </Box>
                    </Box>
                </Grid>
            </PageContent>
        </Page>
    );
}

export default ProjectPage;

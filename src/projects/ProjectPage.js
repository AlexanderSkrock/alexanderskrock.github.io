import React from "react";
import { Box, Button, Card, CardBody, CardHeader, CardFooter, Grid, Page, PageContent, Heading } from "grommet";
import { Github, Link } from "grommet-icons";

import professionalProjects from "./professionalProjects";
import maintainerProjects from "./maintainerProjects";
import contributorProjects from "./contributorProjects";

const toCard = ({ name, description, github, link }) => (
    <Card>
        <CardHeader pad="medium">{ name }</CardHeader>
        <CardBody pad="medium">{ description }</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            { link ? <Button icon={<Link color="plain" />} href={ link } hoverIndicator /> : null }
            { github ? <Button icon={<Github color="plain" />} href={ github } hoverIndicator /> : null }
        </CardFooter>
    </Card>
);

const ProjectPage = () => (
    <Page>
        <PageContent>
            <Grid
                rows={['auto', 'auto']}
                columns={['1/2', '1/2']}
                gap="small"
                areas={[
                    { name: 'professional', start: [0, 0], end: [0, 1] },
                    { name: 'maintainer', start: [1, 0], end: [1, 0] },
                    { name: 'contributor', start: [1, 1], end: [1, 1] },
                ]}>
                <Box gridArea="professional" pad="small" gap="small">
                    <Heading>Professional</Heading>
                    { professionalProjects.map(toCard) }
                </Box>
                <Box gridArea="maintainer" pad="small" gap="small">
                    <Heading>Maintainer</Heading>
                    { maintainerProjects.map(toCard) }
                </Box>
                <Box gridArea="contributor" pad="small" gap="small">
                    <Heading>Contributor</Heading>
                    { contributorProjects.map(toCard) }
                </Box>
            </Grid>
        </PageContent>
    </Page>
);

export default ProjectPage;
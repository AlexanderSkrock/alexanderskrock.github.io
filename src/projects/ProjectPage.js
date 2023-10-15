import React from "react";
import { Box, Button, Card, CardBody, CardHeader, CardFooter, Grid, Page, PageContent } from "grommet";
import { Github } from "grommet-icons";

const professionalProjects = ["X-OUT", "TOBI"];
const maintainerProjects = ["Camunda Modeler Provisioner"];
const contributorProjects = ["rewrite"];

const toCard = project => (
    <Card>
        <CardHeader pad="medium">{ project }</CardHeader>
        <CardBody pad="medium">{ project }</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <Button icon={<Github color="plain" />} hoverIndicator />
        </CardFooter>
    </Card>
);

const ProjectPage = () => (
    <Page>
        <PageContent>
            <Grid
                rows={['flex', 'flex']}
                columns={['1/2', '1/2']}
                gap="small"
                areas={[
                    { name: 'professional', start: [0, 0], end: [0, 1] },
                    { name: 'maintainer', start: [1, 0], end: [1, 0] },
                    { name: 'contributor', start: [1, 1], end: [1, 1] },
                ]}>
                <Box gridArea="professional" background="brand" pad="small" gap="small">
                    { professionalProjects.map(toCard) }
                </Box>
                <Box gridArea="maintainer" background="light-5" pad="small" gap="small">
                    { maintainerProjects.map(toCard) }
                </Box>
                <Box gridArea="contributor" background="light-2" pad="small" gap="small">
                    { contributorProjects.map(toCard) }
                </Box>
            </Grid>
        </PageContent>
    </Page>
);

export default ProjectPage;
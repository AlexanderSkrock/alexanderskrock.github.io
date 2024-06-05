import React from "react";

import { Box, Card, CardBody, CardHeader, Image, NameValueList, NameValuePair } from "grommet";

import ProjectCard from "../../components/ProjectCard";
import Link from "../../components/Link";

const ExperienceCard = ({ experience: { organization: { icon, url, name }, projects, from, to, roles } }) => (
    <Card direction="row-responsive" gap="small" wrap round={ false }>
        <CardHeader direction="column" justify="start">
            <Box pad="small" fill="horizontal" height="xsmall" align="center">
                <Image src={ icon } fit="contain" />
            </Box>
            <NameValueList layout="grid">
                <NameValuePair name="Organization">
                    <span> { name } <Link url={ url } /></span>
                </NameValuePair>
                <NameValuePair name="Time">
                    <span> { from } to { to || "today" } </span>
                </NameValuePair>
                <NameValuePair name="Roles">
                    { roles.map(role => <span>{ role }</span>) }
                </NameValuePair>
            </NameValueList>
        </CardHeader>
        <CardBody pad="medium">
            <Box direction="row-responsive" wrap>
                {
                    projects.map((project, index) => (
                        <Box direction="row-responsive" pad="small">
                            <ProjectCard key={ `project_${index}` } project={ project } />
                        </Box>
                    ))
                }
            </Box>
        </CardBody>
    </Card>
);

export default ExperienceCard;

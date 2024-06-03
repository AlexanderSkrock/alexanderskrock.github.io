import React from "react";

import { Box, Card, CardBody, CardHeader, Image, List, NameValueList, NameValuePair } from "grommet";

import ProjectCard from "../../components/ProjectCard";
import Link from "../../components/Link";

const ExperienceCard = ({ experience: { organization: { icon, url, name }, projects, from, to, roles } }) => (
    <Card direction="row" gap="small" wrap round={ false }>
        <CardHeader direction="column" justify="evenly">
            <Box fill="horizontal" height="xsmall" align="start">
                <Image src={ icon } fit="contain" />
            </Box>
            <NameValueList layout="grid" valueProps={ { align: "baseline" }}>
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
            <List data={ projects } gap="small">
                {
                    (project, index) => <ProjectCard key={ `project_${index}` } project={ project } />
                }
            </List>
        </CardBody>
    </Card>
);

export default ExperienceCard;

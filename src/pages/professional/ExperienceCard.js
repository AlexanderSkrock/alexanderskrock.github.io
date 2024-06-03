import React, { useContext } from "react";

import { Box, Card, CardBody, CardFooter, CardHeader, Grid, Image, NameValueList, NameValuePair, ResponsiveContext } from "grommet";

import ProjectCard from "../../components/ProjectCard";
import Link from "../../components/Link";

const getResponsiveGridProps = (size) =>  {
    switch (size) {
        case "xsmall":
        case "small":
        case "medium":
        case "large":
        default:
            return {
                columns: ["full"],
            };
    }
}

const ExperienceCard = ({ experience: { organization: { icon, url, name }, projects, from, to, roles } }) => {
    const size = useContext(ResponsiveContext);

    return (
        <Card direction="row" gap="small" wrap round={ false }>
            <CardHeader pad="medium" direction="column" justify="evenly">
                <Box fill="horizontal" height="xsmall" align="start">
                    <Image src={ icon } fit="contain"/>
                </Box>
                <NameValueList layout="grid">
                    <NameValuePair name="Organization">
                        <span> { name } </span>
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
                <Grid pad="small" gap="small" { ...getResponsiveGridProps(size) }>
                    { projects && projects.length > 0 ? projects.map((project, i) => <ProjectCard key={ `project_${i}` } project={ project } />) : null}
                </Grid>
            </CardBody>
        </Card>
    );
}

export default ExperienceCard;

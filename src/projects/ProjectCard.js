import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter } from "grommet";
import { Github, Link } from "grommet-icons";

const getResponsiveCardProps = (size) => {
    switch (size) {
        case "xsmall":
        case "small":
            return {
                basis: "medium"
            };
        default:
            return {
                basis: "large"
            };
    }
};

const ProjectCard = ({ size, project: { name, description, github, link } }) => (
    <Card { ...getResponsiveCardProps(size) }>
        <CardHeader pad="medium">{ name }</CardHeader>
        <CardBody pad="medium">{ description }</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            { link ? <Button icon={<Link color="plain" />} href={ link } hoverIndicator /> : null }
            { github ? <Button icon={<Github color="plain" />} href={ github } hoverIndicator /> : null }
        </CardFooter>
    </Card>
);

export default ProjectCard;
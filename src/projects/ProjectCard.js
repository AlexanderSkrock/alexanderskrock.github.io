import React, { isValidElement } from "react";
import { Avatar, Box, Button, Card, CardBody, CardHeader, CardFooter, Paragraph, Tag, Text } from "grommet";
import * as GrommetIcons from "grommet-icons";
import { Github, Link } from "grommet-icons";

const getHeader = ({ icon, name }) => icon
 ? (
    <Box direction="row" gap="small" align="center">
          <Avatar src={ icon } />
          <Text weight="bold"> { name } </Text>
    </Box>
 )
 : <Text weight="bold"> { name } </Text>;

 const getBody = ({ description }) => typeof description === 'string' || description instanceof String
    ? (
        <Paragraph maxLines="5">
            { description }
        </Paragraph>
    )
    : description;

const getTags = ({ tags }) => {
    if (!tags || tags.length < 1) {
        return null;
    }
    return tags.map((tag, idx) => {
        return <Tag key={ `tag_${idx}` } name={ tag } size="xsmall" />;
    });
}

const getLinkIcon = ({ icon, url }) => {
    if (icon) {
        if (isValidElement(icon)) {
            return icon;
        } else {
            return GrommetIcons[icon];
        }
    }
    if (url && url.includes("github")) {
        return Github;
    }
    return Link;
}

 const getLinks = ({ links }) => {
    if (!links || links.length < 1) {
        return null;
    }
    return links.map((link, idx) => {
        const IconComponent = getLinkIcon(link);
        return <Button key={ `link_${idx}` } icon={ <IconComponent color="plain" /> } href={ link.url || link } hoverIndicator />;
    });
 }

const ProjectCard = ({ project }) => (
    <Card>
        <CardHeader pad="medium">
            { getHeader(project) }
        </CardHeader>
        <CardBody pad="medium">
            { getBody(project) }
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <Box direction="row" pad="small" justify="between" fill>
                <Box direction="row" gap="xsmall" wrap>
                    { getTags(project) }
                </Box>
                <Box direction="row" gap="small" align="center">
                    { getLinks(project) }
                </Box>
            </Box>
        </CardFooter>
    </Card>
);

export default ProjectCard;

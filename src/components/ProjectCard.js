import React from "react";
import { Avatar, Box, Card, CardBody, CardHeader, CardFooter, Paragraph, Tag, Text } from "grommet";

import Link from "./Link";

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

 const getLinks = ({ links }) => {
    if (!links || links.length < 1) {
        return null;
    }
    return links.map((link, idx) => (
        <Link key={ `link_${idx}` } icon={ link.icon } url={ link.url || link }/>
    ));
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

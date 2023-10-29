import React from "react";
import { Avatar, Box, Button, Card, CardBody, CardHeader, CardFooter, Paragraph, Tag, Text } from "grommet";
import { Link } from "grommet-icons";

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
    return links.map((link, idx) => {
        const IconComponent = link.icon || Link;
        return <Button key={ `link_${idx}` } icon={ <IconComponent color="plain" /> } href={ link.url || link } hoverIndicator />;
    });
 }

const GenericProjectCard = ({ project }) => (
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

export default GenericProjectCard;

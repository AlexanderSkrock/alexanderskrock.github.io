import React from "react";
import { Avatar, Box, Button, Card, CardBody, CardHeader, CardFooter, Paragraph, Text } from "grommet";
import { Link } from "grommet-icons";

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

 const getLinks = ({ links }) => {
    if (!links || links.length < 1) {
        return null;
    }
    return links.map((link, idx) => {
        const IconComponent = link.icon || Link;
        return <Button key={ `link_${idx}` } icon={ <IconComponent color="plain" /> } href={ link.url || link } hoverIndicator />;
    });
 }

const GenericProjectCard = ({ size, project }) => (
    <Card { ...getResponsiveCardProps(size) }>
        <CardHeader pad="medium">
            { getHeader(project) }
        </CardHeader>
        <CardBody pad="medium">
            { getBody(project) }
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <Box direction="row" align="end">
                { getLinks(project) }
            </Box>
        </CardFooter>
    </Card>
);

export default GenericProjectCard;

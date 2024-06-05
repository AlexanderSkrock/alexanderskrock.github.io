import React, { useCallback, useState } from "react";
import { Avatar, Box, Card, CardBody, CardHeader, CardFooter, Paragraph, Tag, Text, Layer, Button } from "grommet";

import Link from "./Link";
import { Close } from "grommet-icons";

const getHeader = ({ icon, name }) => icon
 ? (
    <Box direction="row" gap="small" align="center">
          <Avatar src={ icon } />
          <Text weight="bold"> { name } </Text>
    </Box>
 )
 : <Text weight="bold"> { name } </Text>;

 const getBody = ({ description }, full = false) => typeof description === 'string' || description instanceof String
    ? (
        <Paragraph maxLines={ full ? 0 : 5 }>
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

const ProjectSummaryCard = ({ project, openPopup }) => (
    <Card>
        <CardHeader pad="medium">
            { getHeader(project) }
        </CardHeader>
        <CardBody pad="medium" onClick={ openPopup } focusIndicator={ false }>
            { getBody(project) }
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">
            <Box direction="row" pad="small" justify="between" fill>
                <Box direction="row" wrap gap="xsmall">
                    { getTags(project) }
                </Box>
                <Box direction="row" wrap gap="small" align="center">
                    { getLinks(project) }
                </Box>
            </Box>
        </CardFooter>
    </Card>
);

const ProjectDetailLayer = ({ project, dismissPopup }) => (
    <Layer onEsc={ dismissPopup } onClickOutside={ dismissPopup }>
        <Box pad="small" gap="small">
            { getHeader(project) }  
            { getBody(project, true) }
            <Button icon={ <Close /> } label="Close" onClick={ dismissPopup } />
        </Box>
    </Layer>
);


const ProjectCard = ({ project }) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = useCallback(() => {
        setShowPopup(true);
    }, [setShowPopup]);

    const dismissPopup = useCallback(() => {
        setShowPopup(false);
    }, [setShowPopup]);

    return (
        <>
            <ProjectSummaryCard project={ project } openPopup={ openPopup } />
            {
                showPopup && <ProjectDetailLayer project={ project } dismissPopup={ dismissPopup } />
            }
        </>
    );
}

export default ProjectCard;

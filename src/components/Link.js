import React, { isValidElement, useMemo } from "react";

import { Avatar, Button } from "grommet";

import * as GrommetIcons from "grommet-icons";
import { Github, Link as LinkIcon } from "grommet-icons";

const getLinkElement = (icon, url) => {
    if (icon) {
        if (isValidElement(icon)) {
            return icon;
        }
        const GrommetIcon = GrommetIcons[icon];
        if (GrommetIcon) {
            return <GrommetIcon />;
        }
        return <Avatar src={ icon } round={ false } />;
    }
    if (url && url.includes("github")) {
        return <Github />;
    }
    return <LinkIcon />;
}

const Link = ({ icon, url }) => {
    const iconElement = useMemo(() => getLinkElement(icon, url), [icon, url]);
    return <Button icon={ iconElement } href={ url } hoverIndicator />;
}

export default Link;
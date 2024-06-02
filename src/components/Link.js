import React, { isValidElement, useMemo } from "react";

import { Button } from "grommet";

import * as GrommetIcons from "grommet-icons";
import { Github, Link as LinkIcon } from "grommet-icons";

const getLinkIcon = (icon, url) => {
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
    return LinkIcon;
}

const Link = ({ icon, url }) => {
    const IconComponent = useMemo(() => getLinkIcon(icon, url), [icon, url]);
    return <Button icon={ <IconComponent color="plain" /> } href={ url } hoverIndicator />;
}

export default Link;
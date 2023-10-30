import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "grommet";
import { Github, Linkedin, Mail } from "grommet-icons";

const Contacts = () => (
    <Grid columns={ [ "xxsmall", "auto" ] } gap="small" align="center">
        <Mail />
        <Link to="mailto://alexander@skrock.dev">alexander@skrock.dev</Link>
        <Linkedin />
        <Link to="https://www.linkedin.com/in/alexander-skrock/">Alexander Skrock</Link>
        <Github />
        <Link to="https://github.com/AlexanderSkrock">AlexanderSkrock</Link>
    </Grid>
);

export default Contacts;

import React from "react";
import { Outlet } from "react-router-dom";

import { Anchor, grommet, Grommet, Header, Nav } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Certificate, HomeRounded, Projects, Contact } from "grommet-icons";

const theme = deepMerge(grommet, {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
});

const Root = () => (
    <Grommet theme={ theme } full>
        <Header>
            <Nav direction="row" background="brand" pad="medium">
                <Anchor href="/" icon={ <HomeRounded />} hoverIndicator />
                <Anchor href="/projects" icon={ <Projects />} hoverIndicator />
                <Anchor href="/knowledge" icon={ <Certificate /> } hoverIndicator />
                <Anchor href="/contact" icon={ <Contact /> } hoverIndicator />
            </Nav>
        </Header>
        <Outlet />
    </Grommet>
);

export default Root;
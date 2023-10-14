import React from "react";
import { Outlet } from "react-router-dom";

import { Anchor, Grommet, Header, Main, Nav } from 'grommet';
import { Certificate, HomeRounded, Projects, Contact } from "grommet-icons";

import theme from "./theme";

const Root = () => (
    <Grommet theme={ theme }>
        <Header sticky="scrollup">
            <Nav direction="row" background="brand" pad="medium">
                <Anchor href="/" icon={ <HomeRounded />} hoverIndicator />
                <Anchor href="/projects" icon={ <Projects />} hoverIndicator />
                <Anchor href="/knowledge" icon={ <Certificate /> } hoverIndicator />
                <Anchor href="/contact" icon={ <Contact /> } hoverIndicator />
            </Nav>
        </Header>
        <Main>
            <Outlet />
        </Main>
    </Grommet>
);

export default Root;
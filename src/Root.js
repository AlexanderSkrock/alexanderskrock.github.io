import React, { useCallback, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import { Anchor, Grommet, Header, Main, Nav } from 'grommet';
import { Certificate, HomeRounded, Projects, Contact } from "grommet-icons";

import ConstantsContext from "./ConstantsContext";
import theme from "./theme";

const Root = () => {
    const [mainHeight, setMainHeight] = useState("100vh");
    const constants = useMemo(() => ({
        mainHeight,
    }), [mainHeight]);

    const consumeHeader = useCallback(headerRef => {
        if (headerRef) {
            setMainHeight(`calc(100vh - ${headerRef.clientHeight}px)`);
        }
    }, []);

    return (
        <Grommet theme={ theme }>
            <Header sticky="scrollup" ref={ consumeHeader }>
                <Nav direction="row" fill="horizontal" justify="around" pad="small" background="brand">
                    <Anchor href="/" icon={ <HomeRounded />} hoverIndicator />
                    <Anchor href="/projects" icon={ <Projects />} hoverIndicator />
                    <Anchor href="/knowledge" icon={ <Certificate /> } hoverIndicator />
                    <Anchor href="/contact" icon={ <Contact /> } hoverIndicator />
                </Nav>
            </Header>
            <Main background="background">
                <ConstantsContext.Provider value={ constants }>
                    <Outlet />
                </ConstantsContext.Provider>
            </Main>
        </Grommet>
    );
}

export default Root;
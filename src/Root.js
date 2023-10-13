import React from "react";
import { grommet, Grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Outlet } from "react-router-dom";

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
        <Outlet />
    </Grommet>
);

export default Root;
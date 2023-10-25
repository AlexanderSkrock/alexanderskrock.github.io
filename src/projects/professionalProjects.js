import { Avatar, Box, Text } from "grommet";

import XOutIcon from "./xout.svg";

const professionalProjects = [    
    {
        name: (
            <Box direction="row" gap="small" align="center">
              <Avatar src={ XOutIcon } />
              <Text weight="bold">X-OUT</Text>
            </Box>
        ),
        description: <span>TODO</span>,
        link: "https://www.x-out.de/"
    },
    {
        name: (
            <Box direction="row" gap="small" align="center">
              <Avatar src={ XOutIcon } />
              <Text weight="bold">X-OUT Web TOBI</Text>
            </Box>
        ),
        description: <span>TODO</span>,
        link: "https://www.x-out.de/"
    }
];

export default professionalProjects;
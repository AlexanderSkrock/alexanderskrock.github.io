import { Avatar, Box, Paragraph, Text } from "grommet";

import XOutIcon from "./xout.svg";

const professionalProjects = [    
    {
        name: (
            <Box direction="row" gap="small" align="center">
              <Avatar src={ XOutIcon } />
              <Text weight="bold">X-OUT</Text>
            </Box>
        ),
        description: <Paragraph maxLines="5">Mit X-OUT werden Sie das unternehmensweite Output Management konsolidieren, vereinfachen, vereinheitlichen. Wir unterstützen Ihre individuellen Output-Prozesse mit einer individuellen Output Management Lösung und über 30 Schnittstellen. Durch absolute Serviceorientierung sorgen wir für eine zentrale, prozess- und anwendungsübergreifende Plattform. Ob Massen- oder Individualdruck, ob prozessgebunden oder -ungebunden – mit X-OUT hat Ihr Output Management immer System.</Paragraph>,
        link: "https://www.x-out.de/"
    },
    {
        name: (
            <Box direction="row" gap="small" align="center">
              <Avatar src={ XOutIcon } />
              <Text weight="bold">X-OUT Web TOBI</Text>
            </Box>
        ),
        description: <Paragraph maxLines="5">In Zusammenarbeit mit unseren Kunden haben wir ein Produkt kreiert, das Sie auf unterschiedlichste Art und Weise bei Ihrer Auftragsabwicklung unterstützt. Mit Fokus auf dokumentbasierte Abläufe ist X-OUT Web TOBI die perfekte Ergänzung für Ihre X-OUT Output Management Lösung. Doch X-OUT Web TOBI kann mehr. Das modulare Freamwork ermöglicht uns das Abbilden verschiedenster Workflows. Gemeinsam optimieren wir Ihre Geschäftsprozesse.</Paragraph>,
        link: "https://www.x-out.de/"
    }
];

export default professionalProjects;
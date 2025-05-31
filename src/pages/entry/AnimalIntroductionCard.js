import React from "react";

import {Card, CardBody, CardHeader, Heading, Text} from "grommet";

const AnimalIntroductionCard = () => (
    <Card>
        <CardHeader>
            <Heading>
                Animals
            </Heading>
        </CardHeader>
        <CardBody>
            <Text>
                Beyond tech, I'm a passionate animal lover. I share my life with a dog and two cats.
                I believe empathy, patience, and responsibility – key traits in animal care – are just as essential in software teams.
            </Text>
        </CardBody>
    </Card>
);

export default AnimalIntroductionCard;

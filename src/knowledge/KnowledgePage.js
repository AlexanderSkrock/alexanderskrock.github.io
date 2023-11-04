import React from "react";
import { Card, CardHeader, Page, PageContent, Text } from "grommet";

const KnowledgePage = () => (
    <Page data-testid="knowledgePage">
        <PageContent>
            <Card>
                <CardHeader pad="medium">
                    <Text weight="bold">Languages</Text>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader pad="medium">
                    <Text weight="bold">Frameworks & Technologies</Text>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader pad="medium">
                    <Text weight="bold">Tools</Text>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader pad="medium">
                    <Text weight="bold">Trainings & Certificates</Text>
                </CardHeader>
            </Card>
        </PageContent>
    </Page>
);

export default KnowledgePage;

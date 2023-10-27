import { CAMUNDA_TAG, CONTRIBUTOR_TAG, PERSONAL_TAG } from "./tags";

const contributorProjects = [
    {
        name: "Open Rewrite",
        github: "https://github.com/openrewrite/rewrite",
        tags: [ PERSONAL_TAG, CONTRIBUTOR_TAG ],
    },
    {
        name: "BPMN JS Element Templates",
        github: "https://github.com/bpmn-io/bpmn-js-element-templates",
        tags: [ PERSONAL_TAG, CONTRIBUTOR_TAG, CAMUNDA_TAG ]
    },
    {
        name: "Element Templates JSON schema",
        github: "https://github.com/camunda/element-templates-json-schema",
        tags: [ PERSONAL_TAG, CONTRIBUTOR_TAG, CAMUNDA_TAG ]
    },
    {
        name: "Camunda Documentation",
        github: "https://github.com/camunda/camunda-docs",
        tags: [ PERSONAL_TAG, CONTRIBUTOR_TAG, CAMUNDA_TAG ]
    }
];

export default contributorProjects;

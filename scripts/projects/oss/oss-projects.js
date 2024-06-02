const { CAMUNDA_MODELER_TAG, NODE_TAG, JAVA_TAG, JS_TAG, JSON_SCHEMA_TAG } = require("../tags");

const maintainerProjects = [
    {
        name: "Camunda Modeler Provisioner",
        github: "https://github.com/AlexanderSkrock/camunda-modeler-provisioner",
        tags: [ CAMUNDA_MODELER_TAG, NODE_TAG ]
    },
]

const contributorProjects = [
    {
        name: "Open Rewrite",
        github: "https://github.com/openrewrite/rewrite",
        tags: [ JAVA_TAG ],
    },
    {
        name: "BPMN JS Element Templates",
        github: "https://github.com/bpmn-io/bpmn-js-element-templates",
        tags: [ CAMUNDA_MODELER_TAG, JS_TAG ]
    },
    {
        name: "Element Templates JSON schema",
        github: "https://github.com/camunda/element-templates-json-schema",
        tags: [ CAMUNDA_MODELER_TAG, JSON_SCHEMA_TAG ]
    },
    {
        name: "Camunda Documentation",
        github: "https://github.com/camunda/camunda-docs",
        tags: []
    }
];

const projects = [ ...maintainerProjects, ...contributorProjects ];

module.exports = projects;
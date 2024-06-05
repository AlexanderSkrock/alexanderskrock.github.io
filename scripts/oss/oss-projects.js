const { CAMUNDA_MODELER_TAG, JAVA_TAG, JS_TAG, JSON_SCHEMA_TAG } = require("../constants/tags");

const ossProjects = [
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

module.exports = ossProjects;
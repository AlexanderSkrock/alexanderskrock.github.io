// Scope of project
const PERSONAL_TAG = "Personal";

// Languages
const JSON_SCHEMA_TAG = "JSON Schema";
const JAVA_TAG = "Java";
const JS_TAG = "JavaScript";

// Framework & Technologies
const NODE_TAG = "Node.js";
const CAMUNDA_MODELER_TAG = "Camunda Modeler";

const maintainerProjects = [
    {
        name: "Camunda Modeler Provisioner",
        github: "https://github.com/AlexanderSkrock/camunda-modeler-provisioner",
        tags: [ PERSONAL_TAG, CAMUNDA_MODELER_TAG, NODE_TAG ]
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
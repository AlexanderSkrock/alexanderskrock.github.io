// Scope of project
const PERSONAL_TAG = "Personal";

// Languages
const JSON_SCHEMA_TAG = "JSON Schema";
const JAVA_TAG = "Java";
const JS_TAG = "JavaScript";

// Framework & Technologies
const NODE_TAG = "Node.js";
const REACT_TAG = "React";
const SPRING_BOOT_TAG = "Spring Boot";
const CAMUNDA_7_TAG = "Camunda 7";
const CAMUNDA_MODELER_TAG = "Camunda Modeler";

const professionalProjects = [
    {
        name: "X-OUT",
        description: "Mit X-OUT werden Sie das unternehmensweite Output Management konsolidieren, vereinfachen, vereinheitlichen.",
        icon: "/projects/xout.svg",
        links: [ "https://www.x-out.de/" ],
        tags: [ JAVA_TAG, SPRING_BOOT_TAG ]
    },
    {
        name: "X-OUT Web TOBI",
        description: "In Zusammenarbeit mit unseren Kunden haben wir ein Produkt kreiert, das Sie auf unterschiedlichste Art und Weise bei Ihrer Auftragsabwicklung unterstützt.",
        icon: "/projects/tobi.svg",
        links: [ "https://www.x-out.de/" ],
        tags: [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, CAMUNDA_7_TAG, REACT_TAG ]
    }
]

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

const projects = [ ...professionalProjects, ...maintainerProjects, ...contributorProjects ];

module.exports = projects;
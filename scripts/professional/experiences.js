    const { JAVA_TAG, SPRING_BOOT_TAG, JS_TAG, CAMUNDA_7_TAG, REACT_TAG, ANGULAR_TAG, NODE_TAG, C_SHARP_TAG } = require("../constants/tags");

const experiences = [
    {
        from: "Oktober 2017",
        to: "September 2020",
        organization: {
            name: "Unversity of Economics and Law Berlin",
            url: "https://www.hwr-berlin.de",
            icon: "/companies/hwr.svg",
        },
        roles: [
            "Dual Student of Informatics",
        ],
        projects: [
            {
                name: "Sokoban",
                description: "In the scope of this project, I developed a web app for the well-known game Sokoban including a level editor to design custom layouts.",
                tags: [ NODE_TAG, JS_TAG, ANGULAR_TAG ],
                links: [
                    "https://github.com/AlexanderSkrock/Sokoban",
                ],
            },
            {
                name: "Studyproject: Implement and deploy a SLAM algorithm",
                description: "In the scope of this project, me and two other students got to know the modular robot system called VolksBot. We applied our knowledge about SLAM algorithms to implement such an algorithm and integrate it with the robot's sensors to create a robot which can autonomously explore unknown rooms. The state of exploration was stored in form of a map.",
                tags: [ C_SHARP_TAG ],
            },
            {
                name: "Studyproject: Compiler engineering",
                description: "In the scope of this project, I developed a client server application to write and test regexes as well as defining and applying rules for tokenization of text inputs. The whole implementation is neither based on any library nor using the java built-in regex utility, but instead uses self-implemented automatas.",
                tags: [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, REACT_TAG ],
                links: [
                    "https://github.com/AlexanderSkrock/compiler",
                    "https://github.com/AlexanderSkrock/compiler-application-server",
                    "https://github.com/AlexanderSkrock/compiler-web-app"
                ]
            },
        ]
    },
    {
        from: "Oktober 2020",
        to: null,
        organization: {
            name: "data experts gmbh",
            url: "https://www.data-experts.de",
            icon: "/companies/data-experts.svg",
        },
        roles: [
            "Software Engineer",
            "Software Architect",
        ],
        projects: [
            {
                name: "X-OUT",
                description: "Mit X-OUT werden Sie das unternehmensweite Output Management konsolidieren, vereinfachen, vereinheitlichen.",
                icon: "/projects/xout.svg",
                links: [ "https://www.x-out.de/" ],
                tags: [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, REACT_TAG ],
            },
            {
                name: "X-OUT Web TOBI",
                description: "In Zusammenarbeit mit unseren Kunden haben wir ein Produkt kreiert, das Sie auf unterschiedlichste Art und Weise bei Ihrer Auftragsabwicklung unterstützt.",
                icon: "/projects/tobi.svg",
                links: [ "https://www.x-out.de/" ],
                tags: [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, CAMUNDA_7_TAG, REACT_TAG ],
            },
        ],
    },
];

module.exports = experiences;

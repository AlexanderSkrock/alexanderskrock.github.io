const { JAVA_TAG, SPRING_BOOT_TAG, JS_TAG, CAMUNDA_7_TAG, REACT_TAG } = require("../constants/tags");

const experiences = [
    {
        from: "Oktober 2017",
        to: "September 2020",
        organization: {
            name: "Unversity of Economics and Law Berlin",
            icon: "https://www.hwr-berlin.de/typo3conf/ext/hwrbase/Resources/Public/Images/hwr-logo-alt.svg",
        },
        roles: [
            "Dual Student of Informatics",
        ],
    },
    {
        from: "Oktober 2020",
        to: null,
        organization: {
            name: "data experts gmbh",
            icon: "https://www.data-experts.de/wp-content/themes/data-experts/img/data-experts-logo.svg",
        },
        roles: [
            "Software Engineer",
            "Software Architect",
        ],
        projects: [
            {
                "name": "X-OUT",
                "description": "Mit X-OUT werden Sie das unternehmensweite Output Management konsolidieren, vereinfachen, vereinheitlichen.",
                "icon": "/projects/xout.svg",
                "links": [ "https://www.x-out.de/" ],
                "tags": [ JAVA_TAG, SPRING_BOOT_TAG ]
            },
            {
                "name": "X-OUT Web TOBI",
                "description": "In Zusammenarbeit mit unseren Kunden haben wir ein Produkt kreiert, das Sie auf unterschiedlichste Art und Weise bei Ihrer Auftragsabwicklung unterstützt.",
                "icon": "/projects/tobi.svg",
                "links": [ "https://www.x-out.de/" ],
                "tags": [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, CAMUNDA_7_TAG, REACT_TAG ]
            }
        ], 
    },
];

module.exports = experiences;
const { JAVA_TAG, SPRING_BOOT_TAG, JS_TAG, CAMUNDA_7_TAG, REACT_TAG } = require("../tags");

const businessProjects = [
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
]

module.exports = businessProjects;
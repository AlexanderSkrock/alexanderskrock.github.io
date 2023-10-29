import { CAMUNDA_7_TAG, JAVA_TAG, JS_TAG, REACT_TAG, SPRING_BOOT_TAG } from "./tags";
import XOutIcon from "./xout.svg";

const professionalProjects = [    
    {
        icon: XOutIcon,
        name: "X-OUT",
        description: "Mit X-OUT werden Sie das unternehmensweite Output Management konsolidieren, vereinfachen, vereinheitlichen.",
        links: [ "https://www.x-out.de/" ],
        tags: [ JAVA_TAG, SPRING_BOOT_TAG ]
    },
    {
        icon: XOutIcon,
        name: "X-OUT Web TOBI",
        description: "In Zusammenarbeit mit unseren Kunden haben wir ein Produkt kreiert, das Sie auf unterschiedlichste Art und Weise bei Ihrer Auftragsabwicklung unterstützt.",
        links: [ "https://www.x-out.de/" ],
        tags: [ JAVA_TAG, JS_TAG, SPRING_BOOT_TAG, CAMUNDA_7_TAG, REACT_TAG ]
    }
];

export default professionalProjects;
// Project images

import tictactoeImg from "../assets/projects-images/three-in-line.webp";
import foodiesImg from "../assets/projects-images/foodies.png";
import schoolImg from "../assets/projects-images/school.png";
import mundoGatunoImg from "../assets/projects-images/mundo-gatuno.png";

// Project logos

import javascriptLogo from "../assets/techs/javascript.png";
import reactLogo from "../assets/techs/react.png";
import typescriptLogo from "../assets/techs/typescript.png";
import nextLogo from "../assets/techs/next.png";

export const PROJECT_ITEMS = [
    {
        id: "p1",
        title: "Tic Tac Toe",
        description: "A ReactJS-based Tic-Tac-Toe game using functional components and state management to track turns and determine winners.",
        technologies: [
            { id: "t1", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t2", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: tictactoeImg,
        link: "https://dmt-tictactoe.vercel.app/"
    },
    {
        id: "p2",
        title: "Mundo Gatuno",
        description: "I developed Mundo Gatuno, an e-commerce platform designed to simplify the purchase and delivery of cat products.",
        technologies: [
            { id: "t3", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t4", name: "React logo", logo: reactLogo, title: "React" },
            { id: "t5", name: "TypeScript logo", logo: typescriptLogo, title: "TypeScript" },
            { id: "t6", name: "NextJS logo", logo: nextLogo, title: "NextJS" },
        ],
        image: mundoGatunoImg,
        link: ""
    },
    {
        id: "p3",
        title: "School platform",
        description: "I developed a subscription-based school platform that centralizes and manages all the needs of the school community.",
        technologies: [
            { id: "t7", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t8", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: schoolImg,
        link: ""
    },
    {
        id: "p4",
        title: "Foodies",
        description: "I developed Foodies, a platform that connects food lovers with exclusive deals, restaurants, and personalized culinary experiences.",
        technologies: [
            { id: "t9", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t10", name: "React logo", logo: reactLogo, title: "React" },
            { id: "t11", name: "NextJS logo", logo: nextLogo, title: "NextJS" },
        ],
        image: foodiesImg,
        link: ""
    },
];

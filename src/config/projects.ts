// Project images

import tictactoeImg from "../assets/projects-images/three-in-line.webp";
import foodiesImg from "../assets/projects-images/foodies.png";
import schoolImg from "../assets/projects-images/school.png";
import mundoGatunoImg from "../assets/projects-images/mundo-gatuno.png";

// Project logos

import javascriptLogo from "../assets/techs/javascript.png";
import reactLogo from "../assets/techs/react.png";

export const PROJECT_ITEMS = [
    {
        id: "p1",
        title: "Tic Tac Toe",
        description: "A description",
        technologies: [
            { id: "t1", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t2", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: tictactoeImg,
    },
    {
        id: "p2",
        title: "Mundo Gatuno",
        description: "A description",
        technologies: [
            { id: "t3", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t4", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: mundoGatunoImg,
    },
    {
        id: "p3",
        title: "School platform",
        description: "A description",
        technologies: [
            { id: "t5", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t6", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: schoolImg,
    },
    {
        id: "p4",
        title: "Foodies",
        description: "A description",
        technologies: [
            { id: "t7", name: "JavaScript logo", logo: javascriptLogo, title: "JavaScript" },
            { id: "t8", name: "React logo", logo: reactLogo, title: "React" },
        ],
        image: foodiesImg,
    },
];

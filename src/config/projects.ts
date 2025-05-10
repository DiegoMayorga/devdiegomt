// Project images

import tictactoeImg from "../assets/projects-images/three-in-line.webp";
import challengesImg from "../assets/projects-images/challenges.png";
import schoolImg from "../assets/projects-images/school.png";
import mundoGatunoImg from "../assets/projects-images/mundo-gatuno.png";
import bookImg from "../assets/projects-images/book.png";

// Project logos

import javascriptLogo from "../assets/techs/javascript.png";
import reactLogo from "../assets/techs/react.png";
import typescriptLogo from "../assets/techs/typescript.png";
/* import nextLogo from "../assets/techs/next.png"; */
import tailwindLogo from "../assets/techs/tailwind.png";
import framerLogo from "../assets/techs/framer.png";
import firebaseLogo from "../assets/techs/firebase.png";
import vitestLogo from "../assets/techs/vitest.svg";
import expressLogo from "../assets/techs/express.png";
import nodeLogo from "../assets/techs/mongo.png";

export const PROJECT_ITEMS = [
  {
    id: "p1",
    title: "Mundo Gatuno",
    description:
      "I developed Mundo Gatuno, an e-commerce platform designed to simplify the purchase and delivery of cat products.",
    technologies: [
      /*       {
        id: "t3",
        name: "JavaScript logo",
        logo: javascriptLogo,
        title: "JavaScript",
        }, */
      { id: "t4", name: "React logo", logo: reactLogo, title: "React" },
      {
        id: "t5",
        name: "TypeScript logo",
        logo: typescriptLogo,
        title: "TypeScript",
      },
      {
        id: "t6",
        name: "Node JS logo",
        logo: nodeLogo,
        title: "Node JS",
      },
      {
        id: "t6-1",
        name: "Tailwind CSS logo",
        logo: tailwindLogo,
        title: "Tailwind CSS",
      },
      {
        id: "t6-2",
        name: "Vitest logo",
        logo: vitestLogo,
        title: "Vitest",
      },
      {
        id: "t6-3",
        name: "Express logo",
        logo: expressLogo,
        title: "Express JS",
      },
    ],
    image: mundoGatunoImg,
    link: "https://mundogatuno.vercel.app/",
  },
  {
    id: "p2",
    title: "School platform",
    description:
      "A subscription-based school platform that centralizes and manages all the needs of the school community. It is a PWA.",
    technologies: [
      /*       {
          id: "t7",
          name: "JavaScript logo",
          logo: javascriptLogo,
          title: "JavaScript",
          }, */
      {
        id: "t8",
        name: "Typescript logo",
        logo: typescriptLogo,
        title: "Typescript",
      },
      { id: "t9", name: "React logo", logo: reactLogo, title: "React" },
      {
        id: "t10",
        name: "Tailwind logo",
        logo: tailwindLogo,
        title: "Tailwind",
      },
    ],
    image: schoolImg,
    link: "https://schoolpt.vercel.app/",
  },
  {
    id: "p3",
    title: "Tic Tac Toe (Desktop)",
    description:
      "A ReactJS-based Tic-Tac-Toe game using functional components and state management to track turns and determine winners.",
    technologies: [
      {
        id: "t1",
        name: "JavaScript logo",
        logo: javascriptLogo,
        title: "JavaScript",
      },
      { id: "t2", name: "React logo", logo: reactLogo, title: "React" },
    ],
    image: tictactoeImg,
    link: "https://dmt-tictactoe.vercel.app/",
  },
  {
    id: "p4",
    title: "Challenges",
    description:
      "Challenges is an app focused on UI design and animations using React and Framer Motion.",
    technologies: [
      {
        id: "t11",
        name: "JavaScript logo",
        logo: javascriptLogo,
        title: "JavaScript",
      },
      { id: "t12", name: "React logo", logo: reactLogo, title: "React" },
      {
        id: "t13",
        name: "Framer Motion logo",
        logo: framerLogo,
        title: "Framer Motion",
      },
    ],
    image: challengesImg,
    link: "https://challenges-ebon.vercel.app/",
  },
  {
    id: "p5",
    title: "Books Cart",
    description:
      "An app built with Redux that allows users to add books to their cart and view their cart contents. Firebase to handle the backend.",
    technologies: [
      {
        id: "t14",
        name: "JavaScript logo",
        logo: javascriptLogo,
        title: "JavaScript",
      },
      { id: "t15", name: "React logo", logo: reactLogo, title: "React" },
      {
        id: "t16",
        name: "Firebase logo",
        logo: firebaseLogo,
        title: "Firebase",
      },
    ],
    image: bookImg,
    link: "https://bookscart-redux.vercel.app/",
  },
];

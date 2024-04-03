import { Project } from "../../interfaces/intefaces";
import patitasenaccion from "../../assets/projects/patitasenaccion.jpg";
import alkemy from "../../assets/projects/alkemy.jpg";
import decentr from "../../assets/projects/decentr.jpg";
import cosmicVegano from "../../assets/projects/cosmic-vegano.jpg";
import mdec from "../../assets/projects/mdec.jpg";
import being from "../../assets/projects/being.jpg";
import nft from "../../assets/projects/nft-marketplace.jpg";
import nodejs from "../../assets/projects/nodejs.jpg";
import aerolab from "../../assets/projects/aerolab.jpg";
import visualboost from "../../assets/projects/visualboost.png";
import openlol from "../../assets/projects/openlol.jpg";
import trocar from "../../assets/projects/trocar.png";

export const projects: Project[] = [
  {
    id: 1,
    name: "API TeamCraft",
    img: nodejs,
    linkGithub: "https://github.com/f-antonelli/team-craft",
    tags: [
      "microservices",
      "hexagonal-architecture",
      "docker",
      "prisma",
      "jest",
    ],
  },
  {
    id: 2,
    name: "API Trocar",
    img: trocar,
    linkGithub: "https://github.com/f-antonelli/trocar-backend",
    tags: ["microservices", "aws-lambda", "serverless", "api-gateway"],
  },
  {
    id: 3,
    name: "Visualboost",
    img: visualboost,
    linkWeb: "http://visualboost.com.ar",
    linkGithub: "https://github.com/f-antonelli/visualboost",
    tags: ["typescript", "aos", "css"],
  },
  {
    id: 4,
    name: "API Homebanking NESTJS",
    img: nodejs,
    linkGithub: "https://github.com/f-antonelli/homebanking_nest",
    tags: ["nestjs", "express", "typescript", "postgres", "docker"],
  },
  {
    id: 5,
    name: "API Ecommerce",
    img: nodejs,
    linkGithub: "https://github.com/f-antonelli/api_ecommerce",
    tags: ["nodejs", "express", "typescript", "mongodb", "swagger", "husky"],
  },
  {
    id: 6,
    name: "NFT Marketplace",
    img: nft,
    linkWeb: "http://nft-prod-mernapp.surge.sh",
    linkGithub: "https://github.com/f-antonelli/backend-exercises",
    tags: ["nodejs", "express", "reactjs", "mongodb", "docker", "sass"],
  },
  {
    id: 7,
    name: "Cosmic Vegano",
    img: cosmicVegano,
    linkGithub: "https://github.com/f-antonelli/cosmic-vegano",
    tags: ["reactjs", "sass", "swiperjs", "eslint-config"],
  },
  {
    id: 8,
    name: "Fullstack | Alkemy",
    img: alkemy,
    linkGithub: "https://github.com/f-antonelli/alkemy-fullstack-challenge",
    tags: [
      "nodejs",
      "express",
      "reactjs",
      "postgresql",
      "sequelize",
      "tailwind",
    ],
  },
  {
    id: 9,
    name: "Frontend | Aerolab",
    img: aerolab,
    linkWeb: "http://aerolab-challenge-silk.vercel.app/",
    linkGithub: "https://github.com/f-antonelli/aerolab-challenge",
    tags: ["reactjs", "styled-components", "aerolab-api", "eslint-confing"],
  },
  {
    id: 10,
    name: "Open LoL Torneos",
    img: openlol,
    linkWeb: "http://www.openlol.com.ar/",
    linkGithub: "https://github.com/f-antonelli/webLolTorneos",
    tags: ["html", "sass", "aos"],
  },
  {
    id: 11,
    name: "Patitas en accion",
    img: patitasenaccion,
    linkWeb: "https://f-antonelli.github.io/patitasenaccion/",
    linkGithub: "https://github.com/f-antonelli/patitasenaccion",
    tags: ["html", "sass", "aos"],
  },
  {
    id: 12,
    name: "Being",
    img: being,
    linkWeb: "http://being-mu.vercel.app/",
    linkGithub: "https://github.com/f-antonelli/being",
    tags: ["vanilla-js", "swiperjs", "aos", "sass"],
  },
  {
    id: 13,
    name: "Frontend | Alkemy",
    img: alkemy,
    linkGithub: "https://github.com/f-antonelli/reactalkemy-challenge",
    tags: ["reactjs", "styled-components", "spoonacular-api", "formik"],
  },
  {
    id: 14,
    name: "mdec Ecommerce",
    img: mdec,
    linkWeb: "http://mdec-ecommerce.vercel.app",
    linkGithub: "https://github.com/f-antonelli/mdecEcommerce",
    tags: ["reactjs", "sass", "firebase"],
  },
  {
    id: 15,
    name: "Decentr | Cripto List",
    img: decentr,
    linkWeb: "https://f-antonelli.github.io/criptoListProject/",
    linkGithub: "https://github.com/f-antonelli/criptoListProject",
    tags: ["vanilla-js", "sass", "coingecko-api"],
  },
];

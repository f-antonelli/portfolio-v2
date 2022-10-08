import { Courses, Studies } from '../../interfaces/intefaces';
import aws from '../../assets/logos/aws.png';
import unlam from '../../assets/logos/unlam.png';
import coderhouse from '../../assets/logos/coderhouse.png';

export const studies: Studies[] = [
  {
    id: 1,
    name: 'Computer Engineering',
    img: unlam,
    date: 'April 2020 - current',
    place: 'UNLaM',
  },
  {
    id: 2,
    name: 'AWS Cloud Practitioner',
    date: 'August 2022',
    img: aws,
    place: 'AWS',
    idCredential: 'f6fbbde0-e3c9-4f82-a6f6-ccef429d20a9',
    link: 'https://www.credly.com/badges/f6fbbde0-e3c9-4f82-a6f6-ccef429d20a9/linked_in_profile',
  },
  {
    id: 3,
    name: 'Frontend React Developer',
    date: 'February 2022',
    img: coderhouse,
    place: 'Coderhouse',
    idCredential: '6205035a27ea450025bf6639',
    link: 'https://www.coderhouse.com/certificados/6205035a27ea450025bf6639',
  },
];

export const courses: Courses[] = [
  {
    id: 2,
    name: 'EFSET English Certificate | C1 Advanced',
    date: 'February 2022',
    platform: 'EF SET',
    link: 'https://www.efset.org/cert/RGSwro',
  },
  {
    id: 3,
    name: 'DevSecOps Explorer | Security & Automation for DevOps',
    date: 'May 2022',
    platform: 'IBM | YourLearning',
    idCredential: '72f74679-daec-4bea-b9c4-a1f49abe4c7a',
    link: 'https://www.credly.com/badges/72f74679-daec-4bea-b9c4-a1f49abe4c7a?source=linked_in_profile',
  },
  {
    id: 4,
    name: 'Typescript guide',
    date: 'July 2022',
    platform: 'Udemy',
    idCredential: 'UC-17df94db-ecb1-4cac-861d-69ef95e0bce2',
    link: 'https://www.udemy.com/certificate/UC-17df94db-ecb1-4cac-861d-69ef95e0bce2/',
  },
  {
    id: 5,
    name: 'PCI DSS Standard and Compliance',
    date: 'July 2022',
    platform: 'Udemy',
    idCredential: 'UC-4b5ddde1-b8db-4ab3-9503-7126a15a8dbd',
    link: 'https://www.udemy.com/certificate/UC-4b5ddde1-b8db-4ab3-9503-7126a15a8dbd/',
  },
  {
    id: 6,
    name: 'GitLab CI | CI/CD Pipelines & DevOps',
    date: 'July 2022',
    platform: 'Udemy',
    idCredential: 'UC-f38dc4f2-2e8a-479f-a938-4ba46f892356',
    link: 'https://www.udemy.com/certificate/UC-f38dc4f2-2e8a-479f-a938-4ba46f892356/',
  },
  {

    id: 7,
    name: 'The MERN Fullstack Guide',
    date: 'September 2022',
    platform: 'Udemy',
    idCredential: 'UC-c117bf4b-42d5-47ac-ac3b-34d1a979024f',
    link: 'https://www.udemy.com/certificate/UC-c117bf4b-42d5-47ac-ac3b-34d1a979024f/',
  },
  {
    id: 8,
    name: ' JavaScript Unit Testing',
    date: 'September 2022',
    platform: 'Udemy',
    idCredential: 'UC-b117255b-dfe8-48ec-8bc8-6f83b4d1d2bb',
    link: 'https://www.udemy.com/certificate/UC-b117255b-dfe8-48ec-8bc8-6f83b4d1d2bb/',
  },
  {
    id: 9,
    name: 'IBM Agile Explorer',
    date: 'August 2022',
    platform: 'IBM | YourLearning',
    idCredential: '1bd3a482-bd65-44a8-b98c-6ca6728e146b',
    link: 'https://www.credly.com/badges/1bd3a482-bd65-44a8-b98c-6ca6728e146b/linked_in_profile',
  },
];

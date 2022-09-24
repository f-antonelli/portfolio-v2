import { NavItems } from '../../interfaces/intefaces';
import projects from '../../assets/projects.svg';
import person from '../../assets/person.svg';
import contact from '../../assets/contact.svg';
import study from '../../assets/study.svg';

export const navContent: NavItems[] = [
  { name: 'Home', img: person },
  {
    name: 'Study',
    img: study,
  },
  {
    name: 'Projects',
    img: projects,
  },

  {
    name: 'Contact',
    img: contact,
  },
];

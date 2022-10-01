import { NavItems } from '../../interfaces/intefaces';
import projects from '../../assets/icons/projects.svg';
import person from '../../assets/icons/person.svg';
import contact from '../../assets/icons/contact.svg';
import study from '../../assets/icons/study.svg';

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

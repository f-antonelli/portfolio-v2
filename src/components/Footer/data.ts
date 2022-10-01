import { FooterItems } from '../../interfaces/intefaces';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import email from '../../assets/icons/email.svg';

export const footerItems: FooterItems[] = [
  { id: 1, link: 'https://www.linkedin.com/in/antonellifd/', img: linkedin },
  {
    id: 2,
    link: 'https://github.com/f-antonelli',
    img: github,
  },
  {
    id: 3,
    img: email,
  },
];

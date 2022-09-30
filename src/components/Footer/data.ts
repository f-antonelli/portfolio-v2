import { FooterItems } from '../../interfaces/intefaces';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';

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

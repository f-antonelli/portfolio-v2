export interface NavItems {
  name: string;
  img: string;
}

export interface FooterItems {
  id: number;
  link?: string;
  img: string;
}

export interface Project {
  id: number;
  name: string;
  img?: string;
  linkGithub: string;
  linkWeb?: string;
  technologies?: string[] | string;
  tags?: string[];
}

export interface Studies {
  id: number;
  name: string;
  date: string;
  img: string;
  place: string;
  idCredential?: string;
  link?: string;
}
export interface Courses {
  id: number;
  name: string;
  date: string;
  platform: string;
  idCredential?: string;
  link: string;
}

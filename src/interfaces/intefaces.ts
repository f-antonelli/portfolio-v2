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

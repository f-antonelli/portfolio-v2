import { Project } from "../../interfaces/intefaces";
import github from "../../assets/icons/github.svg";
import web from "../../assets/icons/web.svg";

import styles from "./project.module.scss";

interface CardProps {
  values: Project;
}
const Card = ({ values }: CardProps) => {
  const { name, img, linkWeb, linkGithub, tags } = values;

  return (
    <article className={styles.card}>
      <div className={styles.boxImg}>
        <img alt={name} src={img} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.tagsContainer}>
          {tags?.map((tag, index) => (
            <p key={index} className={styles.tag}>
              {tag}
            </p>
          ))}
        </div>
        <div className={styles.links}>
          <a href={linkGithub} rel="noreferrer" target="_BLANK">
            <img alt="github" src={github} />
          </a>
          {linkWeb && (
            <a href={linkWeb} rel="noreferrer" target="_BLANK">
              <img alt="web" src={web} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;

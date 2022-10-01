import { Project } from '../../interfaces/intefaces';

import Card from './Card';
import styles from './project.module.scss';

interface CardListProps {
  projects: Project[];
  cantProjects: number;
}
const CardList = ({ projects, cantProjects }: CardListProps) => {
  return (
    <section className={styles.container}>
      {projects.slice(0, cantProjects).map((project) => (
        <Card key={project.id} values={project} />
      ))}
    </section>
  );
};

export default CardList;

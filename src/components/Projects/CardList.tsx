import Card from './Card';
import { projects } from './data';
import styles from './project.module.scss';

const CardList = () => {
  return (
    <section className={styles.container}>
      {projects.map((project) => (
        <Card key={project.id} values={project} />
      ))}
    </section>
  );
};

export default CardList;

import { useState } from 'react';

import CardList from '../components/Projects/CardList';
import { projects } from '../components/Projects/data';

import styles from './styles.module.scss';

const ProjectsPage = () => {
  const [cantProjects, setCantProjects] = useState(6);

  const handleLoadMore = () => {
    setCantProjects((prev) => prev + 2);
  };

  return (
    <section id="projects">
      <h3 className={styles.title}>Project section.</h3>
      <CardList cantProjects={cantProjects} projects={projects} />

      <div className={styles.container}>
        {cantProjects !== projects.length && (
          <button className={styles.button} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;

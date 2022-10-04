import CoursesList from '../components/Formation/CoursesList';
import Studies from '../components/Formation/Studies';

import styles from './styles.module.scss';

const CoursesPage = () => {
  return (
    <div>
      <h3 className={styles.title}>Formation.</h3>

      <h3 className={styles.subtitle}>Studies.</h3>
      <p className={styles.description}>These are my current main studies</p>
      <Studies />

      <h3 className={styles.subtitle}>Completed courses.</h3>
      <CoursesList />
    </div>
  );
};

export default CoursesPage;

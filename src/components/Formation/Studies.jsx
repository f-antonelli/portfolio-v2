import { studies } from './data';
import styles from './formation.module.scss';

const Studies = () => {
  return (
    <div className={styles.studies}>
      {studies.map((study) => (
        <div key={study.id} className={styles.container}>
          <h4 className={styles.title}>{study.name}</h4>
          <div className={styles.studyData}>
            <p>{study.place}</p>
            <img alt={study.name} src={study.img} />
            <span className={styles.date}>{study.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Studies;

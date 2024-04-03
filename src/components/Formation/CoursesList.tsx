import { courses } from "./data";
import Course from "./Course";
import styles from "./formation.module.scss";

const CoursesList = () => {
  return (
    <table className={styles.table}>
      <tbody>
        {courses.map((course) => (
          <Course key={course.id} data={course} />
        ))}
      </tbody>
    </table>
  );
};

export default CoursesList;

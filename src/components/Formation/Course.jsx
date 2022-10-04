import certification from '../../assets/icons/certification.svg';

import styles from './formation.module.scss';

const Course = ({ data }) => {
  const { name, platform, date, link } = data;

  return (
    <tr className={styles.tableItem}>
      <td>{name}</td>
      <td>
        {platform} <span>{date}</span>
      </td>
      <td>
        <a href={link} rel="noreferrer" target="_BLANK">
          <img alt={name} src={certification} />
        </a>
      </td>
    </tr>
  );
};

export default Course;

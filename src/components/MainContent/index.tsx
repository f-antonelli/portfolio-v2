import cv from '../../assets/cv.pdf';

import styles from './main.module.scss';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.pText}>Hi, I&apos;m</p>
        <h1 className={styles.title}>Federico Antonelli</h1>
        <p className={styles.pText}>Fullstack Developer and Computer Engineering at UNLaM</p>
        <a className={styles.viewCV} href={cv} rel="noreferrer" target="_BLANK">
          View CV
        </a>
      </div>
    </div>
  );
};

export default MainContent;

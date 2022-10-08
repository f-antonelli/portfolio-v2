import useModal from '../../hooks/useModal';
import FormContact from '../Form/FormContact';

import { footerItems } from './data';
import styles from './footer.module.scss';

const Footer = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.container} id="contact">
      <h3 className={styles.title}>Contact me.</h3>
      <div className={styles.list}>
        {footerItems.map(({ id, img, link }) => {
          if (link) {
            return (
              <a key={id} className={styles.item} href={link} rel="noreferrer" target="_BLANK">
                <img alt={`${id}`} src={img} />
              </a>
            );
          }

          return (
            <div key={id} className={styles.item}>
              <img alt={`${id}`} src={img} onClick={openModal} />
            </div>
          );
        })}
        {isOpen && <FormContact closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Footer;

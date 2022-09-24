import { navContent } from './data';
import styles from './nav.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navContent.map(({ name, img }) => (
          <li key={name} className={styles.navItem}>
            <img alt={name} src={img} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

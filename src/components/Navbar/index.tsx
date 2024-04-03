import { Link } from "react-scroll";

import { navContent } from "./data";
import styles from "./nav.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navContent.map(({ name, img }) => (
          <li key={name} className={styles.navItem}>
            <Link
              duration={500}
              offset={-100}
              smooth={true}
              spy={true}
              to={name}
            >
              <img alt={name} src={img} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

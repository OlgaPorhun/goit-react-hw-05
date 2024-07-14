import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink to="/" className={styles.link} activeclassname={styles.activeLink}>
      Головна
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Фільми
    </NavLink>
  </nav>
);

export default Navigation;

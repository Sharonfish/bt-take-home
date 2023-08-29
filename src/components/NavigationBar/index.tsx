import { NavLink } from "react-router-dom";
import Container from "../Container";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.body}>
          <p className={styles.brand}>Pokemon Profile</p>
          <div className={styles.menu}>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
            <NavLink className={styles.link} to="/browse">
              Browse
            </NavLink>
            <NavLink className={styles.link} to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

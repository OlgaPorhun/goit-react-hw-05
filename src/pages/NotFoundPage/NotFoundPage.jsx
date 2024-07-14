import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>404 - Not Found</h1>
    <p className={styles.message}>
      Sorry, the page you are looking for does not exist.
    </p>
    <Link to="/" className={styles.link}>
      Go back to Home
    </Link>
  </div>
);

export default NotFoundPage;

import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map((movie) => (
      <li key={movie.id} className={styles.item}>
        <Link to={`/movies/${movie.id}`} className={styles.link}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
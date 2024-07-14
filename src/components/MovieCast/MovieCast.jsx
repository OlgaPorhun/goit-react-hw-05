import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjBiZDVmNGFmMWUwNzVkYWU0NWRlYTYyOTdmZmE1OCIsIm5iZiI6MTcyMDg3OTc0MS41MzI0NjEsInN1YiI6IjY2OTI3YThhMjM4N2QyOTNiZjYzYTcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRLfsvZSjQS0hLL0Q533wpDjXZTlnVeYHGJJUM0mNOI",
        },
      };

      try {
        const response = await axios.get(url, options);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Failed to fetch movie cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li
            key={actor.cast_id || actor.credit_id || actor.id}
            className={styles.castItem}
          >
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "placeholder-image-url"
              }
              alt={actor.name}
              className={styles.castImage}
            />
            <p className={styles.castName}>{actor.name}</p>
            <p className={styles.castCharacter}>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

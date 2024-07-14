import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day";
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjBiZDVmNGFmMWUwNzVkYWU0NWRlYTYyOTdmZmE1OCIsIm5iZiI6MTcyMDg3OTc0MS41MzI0NjEsInN1YiI6IjY2OTI3YThhMjM4N2QyOTNiZjYzYTcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRLfsvZSjQS0hLL0Q533wpDjXZTlnVeYHGJJUM0mNOI",
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

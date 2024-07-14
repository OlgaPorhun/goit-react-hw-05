import { useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
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
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          placeholder="Search movies..."
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {!isLoading && movies.length === 0 && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;

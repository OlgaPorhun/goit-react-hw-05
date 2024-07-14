import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjBiZDVmNGFmMWUwNzVkYWU0NWRlYTYyOTdmZmE1OCIsIm5iZiI6MTcyMDg3OTc0MS41MzI0NjEsInN1YiI6IjY2OTI3YThhMjM4N2QyOTNiZjYzYTcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRLfsvZSjQS0hLL0Q533wpDjXZTlnVeYHGJJUM0mNOI",
        },
      };

      try {
        const response = await axios.get(url, options);
        setReviews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews.length) return <p>Loading...</p>;

  return (
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

import { CardMovie } from "../CardMovie/CardMovie";
import type MovieListProps from "./IMovieList.interface";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
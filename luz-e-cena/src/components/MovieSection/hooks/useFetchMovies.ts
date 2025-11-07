import { useEffect, useState } from 'react'
import type { Movie } from '../../MovieList/IMovieList.interface';
import { getMovies } from '../../../api';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch(error) {
      setError("Ocorreu um erro ao buscar os filmes. Tente novamente.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, error };
}

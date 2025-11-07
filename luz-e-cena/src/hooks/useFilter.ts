import { useEffect, useState } from "react"
import type { Movie } from "../components/MovieList/IMovieList.interface";

export const useFilter = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovie] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredMovie(movies);
  }, [movies]);

  const handleSearch = () => {
    console.log('clicouuuu');
    
    const filtered = movies.filter((movie) => movie.titulo.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredMovie(filtered);
  };

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
}

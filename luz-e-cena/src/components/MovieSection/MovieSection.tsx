import { Fieldset } from '../Fieldset/Fieldset'
import { InputText } from '../InputText/InputText'
import { Button } from '../Button/Button'
import { FaSearch } from 'react-icons/fa'
import styles from './MovieSectio.module.css'
import MovieList from '../MovieList/MovieList'
import { useFetchMovies } from './hooks/useFetchMovies'
import { useFilter } from '../../hooks/useFilter'

export const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } = useFilter(movies);
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText 
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Buscar filmes...' />
          <Button variant='icon' onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {
          isLoading && <p>Carregando filmes...</p>
        }
        {
          error && <p className={styles.error}>{error}</p>
        }
        <MovieList movies={filteredMovies} />
      </section>

    </main>
  )
}

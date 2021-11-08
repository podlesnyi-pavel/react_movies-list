import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => {
      const {
        title,
        description,
        imgUrl,
        imdbUrl,
      } = movie;

      return (
        <div className="card" key={movie.imdbId}>
          <MovieCard
            title={title}
            description={description}
            imgUrl={imgUrl}
            imdbUrl={imdbUrl}
          />
        </div>
      );
    })}
  </div>
);

import { useEffect, useState } from "react";
import { MOVIES } from "./mocks/movies";
import MoviePoster from "./mocks/MoviePoster";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      setMovies(MOVIES.results);
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

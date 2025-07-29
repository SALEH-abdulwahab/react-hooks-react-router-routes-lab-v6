import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <header><NavBar /></header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((g, i) => (
          <span key={i}>{g}</span>
        ))}
      </main>
    </div>
  );
}

export default Movie;

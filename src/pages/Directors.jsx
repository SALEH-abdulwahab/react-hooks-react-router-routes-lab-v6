import NavBar from "../components/NavBar";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <header><NavBar /></header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((d) => (
          <article key={d.id}>
            <h2>{d.name}</h2>
            <ul>
              {d.movies.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Directors;

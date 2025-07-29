import NavBar from "../components/NavBar";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <header><NavBar /></header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((a) => (
          <article key={a.id}>
            <h2>{a.name}</h2>
            <ul>
              {a.movies.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Actors;

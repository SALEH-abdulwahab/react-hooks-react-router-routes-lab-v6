import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

function Home() {
  return (
    <div>
      <header><NavBar /></header>
      <main>
        <h1>Home Page</h1>
        {movies.map((m) => (
          <MovieCard key={m.id} id={m.id} title={m.title} />
        ))}
      </main>
    </div>
  );
}

export default Home;

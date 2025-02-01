import React, { useState, useEffect } from "react";
import Search from "./component/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [serachTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  /* fetching movies */
  const fetchMovies = async () => {
    setIsloading(true);
    setError("");
    try {
      const endPoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new error(`Failed to fetch movies.`);
      }
      const data = await response.json();

      if (data.response === "False") {
        setError(data.error || `Failed to fetch movies`);
        setMovieList([]);
        return;
      }
      console.log(data);
      setMovieList(data.results || []);
    } catch (error) {
      console.log(`Error while fetching movies: ${error}`);
      setError("Error while fetching movies, Please try again later.");
    } finally {
      setIsloading(false);
    }
  };

  /* call fucntion of first mounting of the component */
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main>
      <div className="pattern">
        <div className="Movies">
          <header>
            <img src="./hero-img.png" alt="heroimg" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
            <Search serachTerm={serachTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2>All Movies</h2>
            {isLoading ? (
              <p className="text-white text-2xl">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <ul>
                {movieList.map((movie, index) => (
                  <p className="text-white" key={movie.id}>
                    {movie.title}
                  </p>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;

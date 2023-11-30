import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/features/moviesSlice";
import { MovieInfo } from "../MovieInfo";
import { Cards } from "../Cards";
import "./home.css";

export const Home = () => {
  const movies = useSelector(selectMovies);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(
    () => {
      if (movies) {
        setSelectedMovie(movies[0]);
      }
    },
    [movies]
  );

  const handleSelectedMovie = movie => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-start align-items-center">
      <div className="main-container d-flex flex-column justify-content-start mt-4">
        <h2 className="title mb-3">
          {" "}Tv {">"} <strong> PELÍCULAS</strong>{" "}
        </h2>
        <MovieInfo selectedMovie={selectedMovie} />
      </div>
      <div className="cards-container container-fluid d-flex flex-wrap mt-4 justify-content-center align-items-center">
        {movies
          ? <Cards movies={movies} handleSelectedMovie={handleSelectedMovie} />
          : <h2> loading ... </h2>}
      </div>
    </div>
  );
};

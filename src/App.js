import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Home } from "./components/Home";
import "./App.css";
import { setMovies } from "./redux/features/moviesSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      import("./utils/movies.json").then(data => {
        dispatch(setMovies(data.movies));
      });
    },
    [dispatch]
  );

  return (
    <div className="container-fluid d-flex justify-content-center">
      <Home />
    </div>
  );
};

export default App;

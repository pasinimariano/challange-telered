import { Card } from "../Card";
import "./movie-info.css";

export const MovieInfo = ({ selectedMovie }) => {
  let loading = true;
  let src;
  let alt;
  let logo;

  if (selectedMovie) {
    src = require(`../../assets/poster/${selectedMovie.id}.jpg`);
    logo = require(`../../assets/channel/${selectedMovie.channel.number}.png`);
    alt = `${selectedMovie.title} img`;
    loading = false;
  }

  return (
    <>
      {loading
        ? <h2> loading ... </h2>
        : <div className="container-fluid d-flex justify-content-start align-items-center">
            <div className="row">
              <div className="d-flex col-lg-9 col-md-12">
                <img className="movie-img" src={src} alt={alt} />
              </div>
              <div className="movie-info container col-lg-3 col-md-12">
                <div className="row d-flex align-items-center justify-content-center mt-3">
                  <div className="channel-card col-lg-12 col-md-2 d-flex align-items-center justify-content-center">
                    <Card movie={selectedMovie} logo={logo} />
                  </div>
                  <div className="container-body col-lg-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
                    <div className="movie-description-container mt-1">
                      <p className="movie-description">
                        {" "}{selectedMovie.description}{" "}
                      </p>
                    </div>
                    <div className="movie-title-container mt-1 d-flex justify-content-center align-items-center ">
                      <h2 className="movie-title">
                        {" "}<strong> {selectedMovie.title} </strong>{" "}
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-2 d-flex flex-column align-items-center justify-content-center">
                    <div className="movie-caterogy d-flex align-items-center">
                      <span>
                        {" "}{`${selectedMovie.category}`}{" "}
                      </span>
                      <span className="separator ml-3 mr-3"> | </span>
                      <span>
                        {" "}{`${selectedMovie.clasification}`}{" "}
                      </span>
                      <span className="separator ml-3 mr-3"> | </span>
                      <span>
                        {`${selectedMovie.duration}`} min{" "}
                      </span>
                    </div>
                    <button className="button-open">VER AHORA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
    </>
  );
};

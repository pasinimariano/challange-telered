import "./card.css";

export const Card = ({ movie, logo, handleSelectedMovie }) => {
  return (
    <div
      className="card-container d-flex flex-column align-items-center justify-content-center"
      key={`${movie.channel.number}`}
      onClick={() => handleSelectedMovie(movie)}
    >
      <div className="card-body d-flex justify-content-center align-items-center">
        <img src={logo} alt={`${movie.channel.name} img`} />
      </div>
      <div className="card-footer d-flex flex-column align-items-center mt-2">
        <span>
          {" "}{movie.channel.name.toUpperCase()}
        </span>
        <span className="channel-info">
          {" "}{movie.channel.number}
        </span>
      </div>
    </div>
  );
};

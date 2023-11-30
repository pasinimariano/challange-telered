import { Card } from "../Card";
import "./cards.css";

export const Cards = ({ movies, handleSelectedMovie }) => {
  return (
    <>
      {movies.map(movie => {
        const logo = require(`../../assets/channel/${movie.channel
          .number}.png`);
        return (
          <Card
            key={`${movie.channel.number}`}
            movie={movie}
            logo={logo}
            handleSelectedMovie={handleSelectedMovie}
          />
        );
      })}
    </>
  );
};

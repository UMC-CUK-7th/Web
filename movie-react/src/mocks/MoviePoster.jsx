import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

const MoviePoster = ({ movie }) => {
  return (
    <div
      style={{ margin: "5px", position: "relative", display: "inline-block" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "130px",
          height: "205px",
          transition: "filter 0.3s",
          filter: "brightness(1)",
          borderRadius: "10px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.7)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
      />
    </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviePoster;

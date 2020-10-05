import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../redux";
import "./Header.css";

function Header(props: any) {
  const [movieName, setMovieName] = useState<string>("");
  const [movieYear, setMovieYear] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.fetchMovie(movieName, movieYear);
  };

  return (
    <form className="header-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="movieName">Movie Name</label>
        <input
          type="text"
          value={movieName}
          id="movieName"
          name="movieName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieName(e.target.value)
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="movieYear">Year</label>
        <input
          name="movieYear"
          type="text"
          id="movieYear"
          min="1888"
          max={new Date().getFullYear()}
          value={movieYear}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieYear(e.target.value)
          }
        />
      </div>
      <div className="input-container">
        <button className="form--button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
const mapStateToProps = (state: any) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMovie: (movieName: string, movieYear: string) =>
      dispatch(fetchMovie(movieName, movieYear)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

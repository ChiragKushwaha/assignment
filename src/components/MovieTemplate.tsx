import React from "react";

function MovieTemplate({ data }: any) {
  return (
    <div>
      <h1>{data.Title}</h1>
      <p>
        <b>Year:</b> <i>{data.Year}</i>
        <br />
        <b>Rated:</b> {data.Rated} <br />
        <b>Released:</b> {data.Released} <br />
        <b>Runtime:</b> {data.Runtime}
        <br />
        <b>Genre:</b> {data.Genre}
        <br />
        <b> Director:</b> {data.Director}
        <br />
        <b>Writer:</b> {data.Writer}
        <br />
        <b>Actors:</b> {data.Actors}
        <br />
        <b>Plot:</b> {data.Plot}
        <br />
        <b>Language:</b> {data.Language}
        <br />
        <b>Country:</b> {data.Country}
        <br />
        <b>Awards:</b> {data.Awards}
      </p>
    </div>
  );
}

export default MovieTemplate;

import React, { useState } from "react";
import Modal from "react-modal";
import MovieTemplate from "./MovieTemplate";
import "./MovieModal.css";
Modal.setAppElement("#root");
function MovieModal({ data }: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="modal-container">
      <div className="button-container">
        <button onClick={() => setModalIsOpen(true)}>Modal</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "black",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <img src={data.Poster} alt={data.Title} />
        <MovieTemplate data={data} />
        <b>Metascore:</b> {data.Metascore} <br />
        <b>imdbRating:</b>
        {data.imdbRating} <br />
        <b>imdbVotes:</b> {data.imdbVotes} <br />
        <b>imdbID:</b> {data.imdbID} <br />
        <b>Type:</b> {data.Type} <br />
        <b>DVD:</b> {data.DVD} <br />
        <b>BoxOffice:</b> {data.BoxOffice} <br />
        <b>Production:</b> {data.Production} <br />
        <b>Website:</b> {data.Website} <br />
        <b>Response:</b> {data.Response} <br />
      </Modal>
    </div>
  );
}

export default MovieModal;

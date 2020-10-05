import React, { useEffect } from "react";
import { fetchMovie } from "../redux";
import Header from "./Header";
import { connect } from "react-redux";
import { genetareValues } from "./utils";
import "./SecondPage.css";
function SecondPage({ data }: any) {
  useEffect(() => {
    genetareValues(data, true, "data");
    console.log("use-effect");
  }, [data]);
  return (
    <div className="secondpage">
      <Header />
      <div className="data-container">
        {Object.keys(data).length === 0 && data.constructor === Object ? (
          <h1>No data to display</h1>
        ) : (
          <div id="data"></div>
        )}
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);

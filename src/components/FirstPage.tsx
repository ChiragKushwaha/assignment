import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchMovie } from "../redux";
import MovieModal from "./MovieModal";
import Header from "./Header";
import "./FirstPage.css";
import Pagination from "./Pagination";
import { genetareValues } from "./utils";

function FirstPage({ data }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;

  const sliced = Object.keys(data)
    .slice(indexOfFirstPost, indexOfLastPost)
    .reduce((result: any, key) => {
      result[key] = data[key];

      return result;
    }, {});

  useEffect(() => {
    genetareValues(sliced, false, "data");
    console.log("use-effect");
  }, [sliced]);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="firstpage">
      <Header />
      <div className="data-container">
        {Object.keys(data).length === 0 && data.constructor === Object ? (
          <h1>No data to display</h1>
        ) : (
          <div>
            <div id="data"></div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={Object.keys(data).length}
              paginate={paginate}
            />
            <MovieModal data={data} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);

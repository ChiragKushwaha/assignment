import axios from "axios";
import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./movieTypes";

export const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};
export const fetchMovieSuccess = (data: any) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: data,
  };
};
export const fetchMovieFailure = (error: any) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (
  movieName: string,
  movieYear?: string,
  plot: string = "short"
) => {
  const KEY: string = "74c23e0e";
  const URL: string = `http://www.omdbapi.com/?t=${movieName}&y=${movieYear}&plot=${plot}&apikey=${KEY}`;
  return (dispatch: any) => {
    dispatch(fetchMovieRequest);
    axios
      .get(URL)
      .then((response) => {
        const data = response.data;
        dispatch(fetchMovieSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error;
        dispatch(fetchMovieFailure(errorMsg));
      });
  };
};

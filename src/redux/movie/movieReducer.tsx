import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_SUCCESS,
} from "./movieTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const movieReducer = (state = initialState, action: any) => {
  console.log(action);
  console.log(state.data);
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_MOVIE_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;

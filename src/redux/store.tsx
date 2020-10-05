import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./movie/movieReducer";

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;

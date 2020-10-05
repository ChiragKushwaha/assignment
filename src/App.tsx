import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DifferentTabs from "./components/DifferentTabs";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact strict path="/" component={DifferentTabs} />
        <Route exact strict path="/firstpage" component={FirstPage} />
        <Route exact strict path="/secondpage" component={SecondPage} />
      </Router>
    </Provider>
  );
}

export default App;

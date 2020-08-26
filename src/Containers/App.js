import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import spinner from "./spinner.gif";
// import { robots } from "./robots";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

const App = (props) => {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRobots(data);
      });
  }, []);

  const searchHandler = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  return (
    <div className="tc">
      <h1 className="tc title-font">Robofriends</h1>
      <SearchBox value={search} changeHandler={searchHandler} />
      {robots.length === 0 ? (
        <div className="loading-div">
          <img src={spinner} alt="loading" className="loading" />
        </div>
      ) : (
        <Scroll>
          <ErrorBoundary>
            <CardList value={search} robots={robots} />
          </ErrorBoundary>
        </Scroll>
      )}
    </div>
  );
};

export default App;

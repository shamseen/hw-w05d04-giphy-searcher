import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.scss";
import images from "./data.js";

export default function App() {
  // state vars
  const [images, setImages] = useState([]);

  // formatting GET
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: "G",
    api: "https://api.giphy.com/v1/gifs",
    endpoint: "/search"
  };

  return (
    <div className="App">
      <div>
        <h1>Giphy Searcher</h1>
        <SearchForm />
        <SearchResults images={images} />
      </div>
    </div>
  );
}

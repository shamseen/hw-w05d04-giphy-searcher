import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.scss";
import images from "./data.js";

export default function App() {
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

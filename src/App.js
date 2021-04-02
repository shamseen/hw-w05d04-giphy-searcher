import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";
import SearchResult from "./components/SearchResult";
import "./styles.scss";

export default function App() {
  // state vars
  const [searchStr, setSearchStr] = useState("spongebob");
  const [lastSearch, setLastSearch] = useState("");
  const [images, setImages] = useState([]);

  // formatting GET
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: "G",
    api: "https://api.giphy.com/v1/gifs",
    endpoint: "/search"
  };

  /* --- API call --- */
  // defining GET
  async function getImages() {
    // build a URL from the searchOptions object
    const url = `${searchOptions.api}${searchOptions.endpoint}?
      api_key=${searchOptions.key}&q=${searchStr} 
      &limit=${searchOptions.limit}
      &offset=${searchOptions.offset}
      &rating=${searchOptions.rating}&lang=en`;

    try {
      // GET
      const response = await fetch(url);
      const data = await response.json();

      // updating state
      setImages(data.data);
      setLastSearch(searchStr); //show in header
      setSearchStr(""); // blanking out search box

      // error handling
    } catch (err) {
      console.error(err);
    }
  }

  // calling GET
  useEffect(() => {
    getImages();
  }, []);

  /* --- Event handlers --- */
  function handleChange(event) {
    setSearchStr(event.target.value);
  }

  function handleImgHover(event) {}

  function handleSubmit(event) {
    event.preventDefault();
    getImages();
  }
  return (
    <div className="App">
      <div>
        <SearchResult />
        <SearchHeader lastSearch={lastSearch} />
        <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchStr={searchStr}
        />
        {/* <SearchResults images={images} /> */}
      </div>
    </div>
  );
}

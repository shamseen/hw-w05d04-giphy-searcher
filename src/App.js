import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.scss";

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

  // calling giphy api
  useEffect(() => {
    /* -- DEFINING FUNC -- */
    async function getImages() {
      // testing - hard coded str
      const searchString = "minions";

      // build a URL from the searchOptions object
      const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;

      try {
        // GET
        const response = await fetch(url);
        const data = await response.json();

        // updating state
        setImages(data.data);

        // error handling
      } catch (err) {
        console.error(err);
      }
    }

    /* -- CALLING FUNC -- */
    getImages();
  }, []);

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

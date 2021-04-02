import React from "react";

export default function SearchHeader({ lastSearch }) {
  return (
    <header>
      <h1>Giphy Searcher</h1>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}

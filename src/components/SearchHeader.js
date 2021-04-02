import logo from "../giphy-searcher-logo.svg";

export default function SearchHeader({ lastSearch }) {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="" />
        <h1>Giphy Searcher</h1>
        <p className="muted">
          Showing results for <strong>{lastSearch}</strong>
        </p>
      </div>
    </header>
  );
}

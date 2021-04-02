import { SearchIcon } from "../shared/AppIcons";

export default function SearchForm({ handleSubmit, handleChange, searchStr }) {
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search"
        type="text"
        name="searchStr"
        required
        onChange={handleChange}
        value={searchStr}
      />
      <button type="submit">
        <SearchIcon height="2rem" width="2rem" />
      </button>
    </form>
  );
}

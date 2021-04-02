export default function SearchForm(props) {
  return (
    <form className="form-horizontal">
      <input placeholder="Search" type="text" name="searchString" required />
      <button type="submit">Search</button>
    </form>
  );
}

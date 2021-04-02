export default function SearchResult(props) {
  // return early if there are no images
  if (!props.length) {
    return <h2>No Images Found!</h2>;
  }

  return <div className="gallery">[results]</div>;
}

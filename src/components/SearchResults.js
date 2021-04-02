import SearchResult from "./SearchResult";

export default function SearchResults({ images }) {
  // return early if there are no images
  if (!images.length) {
    return <h2>No Images Found!</h2>;
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <SearchResult key={image.id} img={image} />
      ))}
    </div>
  );
}

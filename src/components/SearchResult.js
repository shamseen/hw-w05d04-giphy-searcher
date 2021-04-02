import "../styles/searchResult.scss";

export default function SearchResult({ img }) {
  return (
    // SRC: https://codepen.io/ArnaudBalland/pen/vGZKLr
    <div class="container">
      <div class="result">
        <a
          href="https://unsplash.com/photos/HkTMcmlMOUQ"
          target="_blank"
          className="gif"
        >
          <div class="overlay"></div>
          <img
            src={img["images"]["downsized_large"]["url"]}
            alt={img["title"]}
          />
          <div class="overlay-text fadeIn-top">
            <h3>Click to copy</h3>
          </div>
        </a>
      </div>
    </div>
    // <div key={image.id} className="gif">
    //   <img src={image.images.downsized_large.url} alt={image.title} />
    // </div>
  );
}

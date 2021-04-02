import "../styles/searchResult.scss";

export default function SearchResult(props) {
  return (
    // SRC: https://codepen.io/ArnaudBalland/pen/vGZKLr
    <div class="container">
      <div class="result">
        <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
          <div class="overlay"></div>
          <img src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
          <div class="overlay-text fadeIn-top">
            <h3>Click to copy</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

import { useState } from "react";
import "../styles/searchResult.scss";

export default function SearchResult({ img }) {
  const [overlayText, setOverlayText] = useState("Click to copy!");
  const url = img.images.downsized_large.url;

  const onImgClick = () => {
    setOverlayText("Clicked!");
    console.log(url);

    // TO DO: mouseout => reset overlay text
  };

  return (
    // SRC: https://codepen.io/ArnaudBalland/pen/vGZKLr
    <div class="container">
      <div class="result" onClick={onImgClick}>
        <div class="overlay"></div>
        <img src={url} alt={img.title} />
        <div class="overlay-text fadeIn-top">
          <h3>{overlayText}</h3>
        </div>
      </div>
    </div>
  );
}

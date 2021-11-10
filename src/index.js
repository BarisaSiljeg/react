import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My best Fruits
    </h1>
    <div>
      <img src={img + "?grayscale"} />
      <img src={require("./slika.jpg")} />
    </div>
  </div>,
  document.getElementById("root")
);

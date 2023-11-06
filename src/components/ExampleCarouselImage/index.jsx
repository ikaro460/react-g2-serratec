import React from "react";


export default function ExampleCarouselImage({text, imagem}) {
  return (
    <div>
      <img src={imagem} />
      <h2>{text}</h2>
    </div>
  );
}

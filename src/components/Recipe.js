import React, { useState } from "react";

export default function Recipe(props) {
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    console.log("moused over");
    setMouseOver(true);
  }

  function handleMouseOut() {
    console.log("moused off");
    setMouseOver(false);
  }

  return (
    <div
      style={{ backgroundColor: isMousedOver ? "#e67e22" : "#f5ba13" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="note"
    >
      <h1>{props.title}</h1>
      <img className="urlImg" src={props.image} alt="" />
      <p>{props.description}</p>
      <p>{props.ingredients}</p>
    </div>
  );
}

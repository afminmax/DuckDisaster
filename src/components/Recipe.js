import React from "react";

export default function Recipe(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <img className="urlImg" src={props.image} alt="" />
      <p>{props.description}</p>
      <p>{props.ingredients}</p>
    </div>
  );
}

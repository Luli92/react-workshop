import React from "react";
import ArrayItem from "./arrayItem";

function ArrayList(props) {
  console.log(props.arr, "props from app.js");
  // ArrayList kommer åt propertyn och skickar vidare till ArrayItem
  const { arr } = props; // Destructurar, samma sak som props.arr

  return (
    <div>
      {arr.map((nr, index) => {
        return <ArrayItem key={index} nr={nr}></ArrayItem>;
      })}
    </div>
  );
}

export default ArrayList;

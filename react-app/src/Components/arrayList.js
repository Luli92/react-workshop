import React from "react";
import ArrayItem from "./arrayItem";

function ArrayList(props) {
  console.log(props.arr, "props from app.js");
  // ArrayList kommer åt propertyn och skickar vidare till ArrayItem

  return (
    <div>
      {props.arr.map((nr, index) => {
        return (
          <ArrayItem key={index} nr={nr}>
            <h1>hej</h1>
          </ArrayItem>
        );
      })}
    </div>
  );
}

export default ArrayList;

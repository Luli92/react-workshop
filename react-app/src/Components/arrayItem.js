import React from "react";

function ArrayItem(nr, index) {
  //tar emot props från ArrayList och kan använda hur man vill
  return (
    <div>
      <button
        onClick={() => console.log(nr.nr, index, "props från ArrayList")}
        style={{
          height: 100,
          width: 100
        }}
      >
        {nr.nr}
      </button>
    </div>
  );
}

export default ArrayItem;

import React from "react";

function ArrayItem(props) {
  const { nr } = props; //destructurar , detta är samma sak som props.nr

  return (
    <div>
      <button
        onClick={() => console.log(nr, "props från ArrayList")}
        style={{
          height: 100,
          width: 100
        }}
      >
        {nr}
      </button>
    </div>
  );
}

export default ArrayItem;

import React from "react";
import "./App.css";
import ArrayList from "./Components/arrayList";

function App() {
  const testArray = ["1", "2", "3", "4", "5"];

  //ArrayList tar in en property, "arr" som har värdet av testArray

  return <ArrayList arr={testArray} />;
}

export default App;

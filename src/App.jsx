import React, { useState } from "react";
import showsData from "./data.js";
import ShowSelection from "./ShowSelection.jsx";
import ShowDetails from "./ShowDetails.jsx";

export default function App() {
  const [shows] = useState(showsData);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div>
      <h1>React TV</h1>
      <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      <ShowDetails show={selectedShow} />
    </div>
  );
}
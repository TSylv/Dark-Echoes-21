import React from "react";

export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <header>
      <nav>
        {shows.map((show) => (
          <a
            key={show.name}
            className="show"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedShow(show);
            }}
          >
            {show.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
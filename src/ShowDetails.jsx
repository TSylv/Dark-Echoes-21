import React, { useState } from "react";
import EpisodeList from "./EpisodeList.jsx";
import EpisodeDetails from "./EpisodeDetails.jsx";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <main>
        <p>Please select a show.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>{show.name}</h2>
      <div className="layout">
        <EpisodeList
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </main>
  );
}
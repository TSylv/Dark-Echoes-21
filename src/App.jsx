import { useState } from "react";
import { episodeList } from "./data";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";

export default function App() {
  const [allEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Dark Echoes</h1>

      <div className="content">
        <EpisodeList
          episodes={allEpisodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </div>

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
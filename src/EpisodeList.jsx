export default function EpisodeList({ episodes, selectedEpisode, setSelectedEpisode }) {
  return (
    <ul className="episode-list">
      {episodes.map((episode) => (
        <li
          key={episode.id}
          onClick={() => setSelectedEpisode(episode)}
          style={{
            cursor: "pointer",
            fontWeight: selectedEpisode?.id === episode.id ? "bold" : "normal",
          }}
        >
          {episode.title}
        </li>
      ))}
    </ul>
  );
}
export default function EpisodeDetails({ episode }) {
  if (!episode) {
    return <p>Please select an episode to see more details.</p>;
  }

  return (
    <div classname="episode-details">
      <h2>Episode {episode.number}</h2>
      <h3>{episode.name}</h3>
      <p>{episode.description}</p>
      <button>Watch now</button>
    </div>
  );
}
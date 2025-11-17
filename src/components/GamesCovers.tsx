import { useGames } from "../hooks/useGames";

export default function GamesCovers() {
  const { data, isLoading, isError, error } = useGames(1);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (!data || !data.content) {
    return <h1>No games available</h1>;
  }

  return (
    <div>
      <ul>
        {data.content.map((game, index) => (
          <li key={index}>
            <img src={game.coverUrl} alt={game.title} />
            <h3>{game.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

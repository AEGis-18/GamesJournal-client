import { useGames } from "../hooks/useGames";
import DisplayGame from "./DisplayGame";

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
          <DisplayGame game={game} index={index}></DisplayGame>
        ))}
      </ul>
    </div>
  );
}

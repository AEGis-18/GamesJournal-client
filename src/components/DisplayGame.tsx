import type { Game } from "../types/GameTypes";

export default function DisplayGame({
  game,
  index,
}: {
  game: Game;
  index: number;
}) {
  return (
    <li key={index}>
      <img src={game.coverUrl} alt={game.title} />
      <h3>{game.title}</h3>
    </li>
  );
}

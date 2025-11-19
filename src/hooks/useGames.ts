import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/game.api";

export function useGames(page = 1) {
  return useQuery({
    queryKey: ["games", page],
    queryFn: () => getGames(page, 50),
  });
}

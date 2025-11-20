import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/game.api";

export function useAllGames(page = 1) {
  return useQuery({
    queryKey: ["games", page],
    queryFn: () => getAllGames(page, 50),
  });
}

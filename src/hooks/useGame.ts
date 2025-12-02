import { useQuery } from "@tanstack/react-query";
import { getGame } from "../api/game.api";

export function useGame(slug: string) {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => getGame(slug),
  });
}

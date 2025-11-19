import type { GameResponse } from "../types/GameTypes";
import { Api } from "./base.api";

export async function getGames(
  page: number,
  size: number
): Promise<GameResponse> {
  const { data } = await Api.get("games/covers", {
    params: { page: page, size: size },
  });
  return data;
}

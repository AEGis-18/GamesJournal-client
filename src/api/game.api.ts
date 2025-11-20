import type { GameInfo, GameResponse } from "../types/GameTypes";
import { Api } from "./base.api";

const BASE_URL = "games/";
export async function getAllGames(
  page: number,
  size: number
): Promise<GameResponse> {
  const { data } = await Api.get(`${BASE_URL}covers`, {
    params: { page: page, size: size },
  });
  return data;
}

export async function getGame(slug: string): Promise<GameInfo> {
  const { data } = await Api.get(`${BASE_URL}${slug}`);
  return data;
}

import type { JournalResponse } from "@/types/JournalGameTypes";
import { Api } from "./base.api";

const BASE_URL = "game-journal/";

export async function getJournalId(): Promise<JournalResponse> {
  const { data } = await Api.get(`${BASE_URL}u/`);
  return data;
}

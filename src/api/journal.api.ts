import type { JournalGame, JournalResponse } from "@/types/JournalGameTypes";
import { Api } from "./base.api";

const BASE_URL = "game-journal/";

export async function getJournalId(): Promise<JournalResponse> {
  const { data } = await Api.get(`${BASE_URL}u/`);
  return data;
}

export async function addJournalEntry(data: JournalGame) {
  const response = await Api.post(`${BASE_URL}add`, data);

  return response;
}

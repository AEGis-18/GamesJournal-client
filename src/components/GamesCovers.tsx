import { useState } from "react";
import { useAllGames } from "../hooks/useAllGames";
import DisplayGame from "./DisplayGame";
import { Pagination } from "./Pagination";
import { SectionTitle } from "./SectionTitle";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Modal } from "./ui/Modal";
import { AddToJournalForm } from "./AddToJournalForm";
import type { Game } from "@/types/GameTypes";

type GameCoversProps = {
  initialPage: number;
};

export function GamesCovers({ initialPage }: GameCoversProps) {
  // const [page, setPage] = useState(1);
  const page = initialPage;
  const { data, isLoading, isError, error } = useAllGames(page);

  const navigate = useNavigate({ from: "/games" });
  const currentSearch = useSearch({ from: "/games/" });

  const [gameToAdd, setGameToAdd] = useState<Game | null>(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (!data || !data.content) {
    return <h1>No games available</h1>;
  }

  const setPage = (newPage: number) => {
    navigate({
      search: {
        ...currentSearch,
        page: newPage,
      },
    });
  };

  function handleOpen(game: Game) {
    setGameToAdd(game);
  }

  function handleClose() {
    setGameToAdd(null);
  }

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-row justify-between items-center w-full flex-wrap">
        <SectionTitle>All Games</SectionTitle>
        <Pagination
          page={page}
          last={data.last}
          totalPages={data.totalPages - 1}
          setPage={setPage}
        ></Pagination>
      </div>
      <div className="rounded-md shadow-md bg-neutral-900 shadow-blue-800 mx-4 py-4">
        <ul className="flex flex-wrap justify-center">
          {data.content.map((game) => (
            <DisplayGame
              key={game.id}
              game={game}
              onOpen={() => handleOpen(game)}
            ></DisplayGame>
          ))}
        </ul>
      </div>
      {gameToAdd && (
        <div className="z-100">
          <Modal isOpen={!!gameToAdd} onClose={handleClose}>
            <AddToJournalForm
              title={gameToAdd.title}
              url={gameToAdd.coverUrl}
              gameId={gameToAdd.id}
            ></AddToJournalForm>
          </Modal>
        </div>
      )}
      <Pagination
        page={page}
        last={data.last}
        totalPages={data.totalPages - 1}
        setPage={setPage}
      ></Pagination>
    </div>
  );
}

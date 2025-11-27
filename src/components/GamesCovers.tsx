import { useState } from "react";
import { useAllGames } from "../hooks/useAllGames";
import DisplayGame from "./DisplayGame";
import { Pagination } from "./Pagination";
import { SectionTitle } from "./SectionTitle";

export default function GamesCovers() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useAllGames(page);

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
            <DisplayGame key={game.id} game={game}></DisplayGame>
          ))}
        </ul>
      </div>
      <Pagination
        page={page}
        last={data.last}
        totalPages={data.totalPages - 1}
        setPage={setPage}
      ></Pagination>
    </div>
  );
}

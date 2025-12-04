import { useGame } from "@/hooks/useGame";
import AddButton from "./ui/AddButton";

export function GameInfo({ gameSlug }: { gameSlug: string }) {
  const { data, isLoading, isError, error } = useGame(gameSlug);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  if (!data) return <p>Game not found</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 flex-wrap">
      <div className="flex flex-col items-center mx-auto md:mx-0">
        <img
          src={data.coverUrl}
          alt={data.title}
          width={250}
          height={375}
        ></img>
        <AddButton className="mt-8  scale-150" size={"lg"} />
      </div>
      <div className="w-auto">
        <h2 className="text-5xl max-w-2xl ">{data.title}</h2>
        <p className="text-base max-w-2xl mt-2">{data.summary}</p>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2">
          <section>
            <h3>Develop by:</h3>
            <ul className="pl-8 ">
              {data.developers.map((developer, index) => {
                return (
                  <li key={index} className="list-disc">
                    {developer}
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <h3>Published by:</h3>
            <ul className="pl-8 ">
              {data.publishers.map((publishers, index) => {
                return (
                  <li key={index} className="list-disc">
                    {publishers}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <section className="mt-4">
          <h3>Genres</h3>
          <ul className="pl-8 ">
            {data.genres.map((genre, index) => {
              return (
                <li key={index} className="list-disc">
                  {genre}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

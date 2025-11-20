import { Link } from "@tanstack/react-router";
import type { Game } from "../types/GameTypes";
import { useAuth } from "./AuthProviders";
import { Button } from "./ui/button";

export default function DisplayGame({ game }: { game: Game }) {
  const { isAuthenticated } = useAuth();

  return (
    <li
      key={game.id}
      className="relative w-[200px] h-[300px] text-center group  hover:scale-[115%] hover:z-50 rounded-sm transition-transform ease-in "
    >
      <img
        src={game.coverUrl}
        alt={game.title}
        className="w-full h-full object-cover group-hover:brightness-50 transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        <h4 className=" text-white text-shadow-lg font-bold p-2 ">
          {game.title}
        </h4>
        <div>
          {isAuthenticated && (
            <Button
              onClick={() => console.log("click")}
              variant={"outline"}
              size={"sm"}
              className="bg-green-700"
            >
              Add
            </Button>
          )}
          <Link to="/games/$gameSlug" params={{ gameSlug: game.slug }}>
            Info
          </Link>
        </div>
      </div>
    </li>
  );
}

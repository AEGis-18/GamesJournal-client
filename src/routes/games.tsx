import { createFileRoute } from "@tanstack/react-router";
import GamesCovers from "../components/GamesCovers";

export const Route = createFileRoute("/games")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <GamesCovers></GamesCovers>
    </div>
  );
}

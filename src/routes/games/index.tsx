import GamesCovers from "@/components/GamesCovers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/games/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GamesCovers></GamesCovers>
    </>
  );
}

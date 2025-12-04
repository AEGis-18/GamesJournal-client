import { GameInfo } from "@/components/GameInfo";
import GameInfoBox from "@/components/ui/GameInfoBox";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/games/$gameSlug")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return { gameSlug: params.gameSlug };
  },
});

function RouteComponent() {
  const { gameSlug } = Route.useParams();
  return (
    <>
      <GameInfoBox>
        <GameInfo gameSlug={gameSlug}></GameInfo>
      </GameInfoBox>
    </>
  );
}

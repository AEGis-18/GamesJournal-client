import { GameInfo } from "@/components/GameInfo";
import { CardContent } from "@/components/ui/card";
import { MyCard } from "@/components/ui/MyCard";
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
      <div className="flex justify-center  min-h-screen">
        <MyCard className="rounded-md border-none shadow-md bg-neutral-900 shadow-blue-800 mx-4 py-4">
          <CardContent>
            <GameInfo gameSlug={gameSlug}></GameInfo>
          </CardContent>
        </MyCard>
      </div>
    </>
  );
}

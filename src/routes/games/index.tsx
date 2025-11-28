import { GamesCovers } from "@/components/GamesCovers";
import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

const gamesSearchSchema = z.object({
  page: fallback(z.number(), 1).default(1),
  // filter: fallback(z.string(), '').default(''),
  // sort: fallback(z.enum(['newest', 'oldest', 'price']), 'newest').default(
  //   'newest',
  // ),
});

export const Route = createFileRoute("/games/")({
  validateSearch: zodValidator(gamesSearchSchema),
  component: RouteComponent,
});

function RouteComponent() {
  const { page } = Route.useSearch();
  return (
    <>
      <GamesCovers initialPage={page}></GamesCovers>
    </>
  );
}

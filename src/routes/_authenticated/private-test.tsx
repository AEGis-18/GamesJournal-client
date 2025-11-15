import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/private-test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authenticated/private-test"!</div>;
}

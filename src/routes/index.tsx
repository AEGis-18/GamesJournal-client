import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => redirect({ to: "/games" }),
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      {/* <h3>Welcome Home!</h3>
      <Link to="/private-test">Private Test</Link>
      <br></br>
      <Link to="/about">About</Link> */}
    </div>
  );
}

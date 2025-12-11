import { useAuth } from "@/components/AuthProviders";
import { SectionTitle } from "@/components/SectionTitle";
import { MyCard } from "@/components/ui/MyCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { auth } = useAuth();

  if (!auth) {
    return <h2>Log in to see user information!</h2>;
  }

  return (
    <div>
      <SectionTitle>Profile</SectionTitle>
      <MyCard>
        <ul>
          <li>
            <h2>{auth?.username}</h2>
          </li>
          <li>
            <h3>{auth?.email}</h3>
          </li>
        </ul>
      </MyCard>
    </div>
  );
}

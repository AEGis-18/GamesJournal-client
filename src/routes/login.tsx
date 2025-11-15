import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  validateSearch: (search) => ({
    redirect: (search.redirect as string) || "/",
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const { auth } = Route.useRouteContext();
  const { redirect } = Route.useSearch();
  const navigate = Route.useNavigate();

  function funcion(e: React.FormEvent): void {
    e.preventDefault();
    auth.isAuthenticated = true;
    console.log("macanada");
    navigate({ to: redirect });
  }
  return <button onClick={funcion}>Volver</button>;
}

import { LoginForm } from "@/components/LoginForm";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";

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
  const { redirect } = Route.useSearch();
  const navigate = useNavigate();
  // const search = Route.useSearch();

  function handleSuccess(): void {
    console.log("first");
    console.log(redirect);
    navigate({ to: redirect });
  }
  return <LoginForm onSuccess={handleSuccess}></LoginForm>;
}

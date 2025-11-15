import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { type AuthContextType } from "../components/AuthProviders";

export interface MyRouterContext {
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  ),
});

// const RootLayout = () => (
//   <>
//     <div>
//       <Link to="/" className="[&.active]:font-bold">
//         Home
//       </Link>{" "}
//       <Link to="/about" className="[&.active]:font-bold">
//         About
//       </Link>
//     </div>
//     <hr />
//     <Outlet />

//   </>
// );

// export const Route = createRootRoute({ component: RootLayout });

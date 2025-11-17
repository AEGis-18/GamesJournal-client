import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { type AuthContextType } from "../components/AuthProviders";
import type { QueryClient } from "@tanstack/react-query";

export interface MyRouterContext {
  auth: AuthContextType;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="grid grid-cols-2">
        <header className="flex justify-start ">
          <Link to="/" className="hover:bg-white hover:text-black p-4 m-0 ">
            Welcome Home!
          </Link>
        </header>
        <nav className="flex justify-end">
          <Link to="/games" className="hover:bg-white hover:text-black p-4">
            Games
          </Link>
          <Link to="/about" className="hover:bg-white hover:text-black p-4">
            About
          </Link>
          <Link
            to="/private-test"
            className="hover:bg-white hover:text-black p-4"
          >
            Private Test
          </Link>
        </nav>
      </div>
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

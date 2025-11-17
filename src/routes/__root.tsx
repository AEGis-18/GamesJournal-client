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
      <div className="p-2">
        <header>
          <Link to="/">
            <h3>Welcome Home!</h3>
          </Link>
        </header>
        <nav>
          <Link to="/private-test">Private Test</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/games">Games</Link>
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

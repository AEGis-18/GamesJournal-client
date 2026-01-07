import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { type AuthContextType } from "../components/AuthProviders";
import type { QueryClient } from "@tanstack/react-query";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

export interface MyRouterContext {
  auth: AuthContextType;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <div className="grow">
        <Header></Header>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </div>
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

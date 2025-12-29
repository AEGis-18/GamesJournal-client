import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useAuth } from "./AuthProviders";
import { Link } from "@tanstack/react-router";
import { MyCard } from "./ui/MyCard";
import { signOut } from "@/api/token.api";
import { useQueryClient } from "@tanstack/react-query";

export default function UserMenu() {
  const { auth, setAuth } = useAuth();
  const queryClient = useQueryClient();

  async function handleLogOut() {
    try {
      const res = await signOut();

      if (res.status === 200) {
        setAuth(undefined);
      }
      // if (res.status === 200) {
      // }
      queryClient.clear();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="[&.active]:bg-blue-500 [&.active]:text-white hover:bg-white hover:text-black p-4 cursor-pointer">
          <h2 className="skew-x-12">{auth ? auth.username : "Guest"}</h2>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="start">
        <MyCard className="skew-x-12 p-0 mt-1  gap-0.5 absolute left-3">
          {auth ? (
            <>
              <DropdownMenuItem className=" px-3 rounded-t-md py-2 cursor-pointer data-highlighted:bg-white data-highlighted:text-black">
                <Link to="/profile">
                  <h2 className="">Profile</h2>
                </Link>
              </DropdownMenuItem>
              {/* 
              <DropdownMenuItem className="px-3 py-2 cursor-pointer data-highlighted:bg-white data-highlighted:text-black">
                <h2 className="m-0">Settings</h2>
              </DropdownMenuItem> */}

              <DropdownMenuItem className="px-3 py-2 rounded-b-md cursor-pointer data-highlighted:bg-white data-highlighted:text-black">
                <h2 className="m-0" onClick={handleLogOut}>
                  Log out
                </h2>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem className="px-3 py-2 rounded-md cursor-pointer data-highlighted:bg-white data-highlighted:text-black">
              <Link to="/login" search={{ redirect: location.pathname }}>
                <h2 className="whitespace-nowrap">Log in</h2>
              </Link>
            </DropdownMenuItem>
          )}
        </MyCard>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

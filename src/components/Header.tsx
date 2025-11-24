import { Link } from "@tanstack/react-router";
import { useAuth } from "./AuthProviders";

export default function Header() {
  const { auth } = useAuth();
  return (
    <div className="grid grid-cols-2 mb-2 bg-neutral-900">
      <header className="flex justify-start -skew-x-12 mx-2">
        <Link to="/" className="hover:bg-white hover:text-black p-2 m-0 ">
          <img
            src="../src/assets/logo-alt.svg"
            className="h-10 w-10 skew-x-12"
          />
        </Link>
      </header>
      <nav className="flex justify-end -skew-x-12 mr-2">
        <Link
          to="/games"
          activeOptions={{ exact: true }}
          className="[&.active]:bg-blue-500  [&.active]:text-white hover:bg-white hover:text-black p-4"
        >
          <h2 className="skew-x-12">Games</h2>
        </Link>
        <Link
          to="/about"
          className="[&.active]:bg-blue-500  [&.active]:text-white hover:bg-white hover:text-black p-4"
        >
          <h2 className="skew-x-12">About</h2>
        </Link>
        <Link
          to="/private-test"
          className="[&.active]:bg-blue-500  [&.active]:text-white hover:bg-white hover:text-black p-4"
        >
          <h2 className="skew-x-12">Private Test</h2>
        </Link>
        <h3 className="[&.active]:bg-blue-500  [&.active]:text-white hover:bg-white hover:text-black p-4">
          {auth ? auth.username : "Guest"}
        </h3>
      </nav>
    </div>
  );
}

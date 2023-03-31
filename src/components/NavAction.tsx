import useAuth from "@app/hooks/useAuth";
import { NavLink } from "react-router-dom";

export default function NavAction() {
  const { currentUser, logout } = useAuth();

  return (
    <li>
      {currentUser ? (
        <button
          onClick={async () => await logout()}
          className="flex items-center h-full px-6 text-white border-none rounded shadow outline-none max-h-[2rem] bg-primary outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light hover:bg-primary-hover active:bg-primary-active"
        >
          Logout
        </button>
      ) : (
        <NavLink
          className="flex items-center h-full px-6 text-white border-none rounded shadow outline-none max-h-[2rem] bg-primary outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light hover:bg-primary-hover active:bg-primary-active"
          to="/login"
        >
          Login
        </NavLink>
      )}
    </li>
  );
}

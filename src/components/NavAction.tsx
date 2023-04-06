import useAuth from "@app/hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";

export default function NavAction() {
  const { currentUser, logout } = useAuth();
  const login = useLocation().pathname.includes("login");

  return (
    <li>
      {currentUser ? (
        <button
          onClick={async () => await logout()}
          className="flex items-center h-full px-6 text-white border-none rounded shadow outline-none max-h-[2rem] bg-primary outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light hover:bg-primary-hover active:bg-primary-active dark:focus-visible:outline-none "
          aria-label="Logout button"
        >
          <span className="drop-shadow-cstm">Logout</span>
        </button>
      ) : (
        <NavLink
          className="flex items-center h-full px-6 text-white border-none rounded shadow outline-none max-h-[2rem] bg-primary outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light hover:bg-primary-hover active:bg-primary-active dark:focus-visible:outline-none "
          to={login ? "/singup" : "/login"}
          aria-label={`${login ? "Singup" : "Login"} link`}
        >
          <span className="drop-shadow-cstm">{login ? "Singup" : "Login"}</span>
        </NavLink>
      )}
    </li>
  );
}

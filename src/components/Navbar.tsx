import { NavLink } from "react-router-dom";
import { MessageIcon } from "@svg/Index";

export default function Navbar() {
  return (
    <nav className="flex items-center h-16 bg-black bg-opacity-10 backdrop-blur-lg">
      <ul className="mx-auto w-[calc(100vw-3rem)] sm:max-w-3xl flex ">
        <li className="mr-auto">
          <NavLink to="/home" className="text-my-primary">
            <MessageIcon />
          </NavLink>
        </li>
        <li>
          <button>✨</button>
        </li>
        <li>
          <NavLink to="/Singup">3</NavLink>
        </li>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode } from "@svg/Index";
import NavAction from "@app/components/NavAction";

export default function Navbar() {
  return (
    <nav className="flex items-center h-16 bg-black/10 shadow backdrop-blur-lg">
      <ul className="flex gap-4 mx-auto sm-width sm:max-w-3xl ">
        <li className="mr-auto">
          <NavLink
            to="/"
            className="shadow text-primary max-h-[2rem] focus-visible:outline-dark focus-visible:shadow"
          >
            <MessageIcon />
          </NavLink>
        </li>
        <li className="max-h-[2rem]">
          <button className="border-none rounded outline-none max-h-[2rem] text-fg outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light">
            <DarkMode className="scale-90" />
          </button>
        </li>
        <NavAction />
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode } from "@svg/Index";

export default function Navbar() {
  return (
    <nav className="flex items-center h-16 bg-black shadow bg-opacity-10 backdrop-blur-lg">
      <ul className="mx-auto w-[calc(100vw-3rem)] sm:max-w-3xl flex gap-4 ">
        <li className="mr-auto">
          <NavLink
            to="/home"
            className="text-my-primary max-h-[2rem] shadow focus-visible:outline-dark focus-visible:shadow"
          >
            <MessageIcon />
          </NavLink>
        </li>
        <li className="max-h-[2rem]">
          <button className="max-h-[2rem] rounded text-my-slate-800 outline-none border-none outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light">
            <DarkMode className="scale-90" />
          </button>
        </li>
        <li>
          <NavLink
            className="max-h-[2rem] flex items-center h-full bg-my-primary px-6 text-white rounded shadow outline-none border-none outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light"
            to="/Singup"
          >
            Singup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode, LightMode } from "@svg/Index";
import NavAction from "@app/components/NavAction";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  }

  return (
    <nav className="flex items-center h-16 bg-black/10 dark:bg-white/5 shadow backdrop-blur-lg">
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
          <button
            onClick={changeTheme}
            className="border-none rounded outline-none max-h-[2rem] text-fg outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light"
          >
            {theme === "dark" ? (
              <DarkMode className="scale-90" />
            ) : (
              <LightMode className="text-slate-200" />
            )}
          </button>
        </li>
        <NavAction />
      </ul>
    </nav>
  );
}

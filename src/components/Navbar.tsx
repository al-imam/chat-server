import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode, LightMode } from "@svg/Index";
import NavAction from "@app/components/NavAction";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function changeTheme() {
    const t = theme === "dark" ? "light" : "dark";
    localStorage.setItem("chat-server-theme", t);
    setTheme(t);
    if (t === "dark") {
      return document.documentElement.classList.add("dark");
    }
    document.documentElement.classList.remove("dark");
  }
  useEffect(() => {
    const t = localStorage.getItem("chat-server-theme") as "dark" | "light";
    if (t) {
      setTheme(t);
    }
    if (t === "dark") {
      return document.documentElement.classList.add("dark");
    }
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <nav className="flex items-center h-16 bg-black/10 dark:bg-white/5 shadow backdrop-blur-lg">
      <ul className="flex gap-4 mx-auto sm-width sm:max-w-3xl ">
        <li className="mr-auto">
          <NavLink
            to="/"
            className="relative shadow text-primary max-h-[2rem] focus-visible:outline-dark focus-visible:shadow after-element"
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
              <LightMode className="scale-90 text-slate-200" />
            ) : (
              <DarkMode className="scale-90" />
            )}
          </button>
        </li>
        <NavAction />
      </ul>
    </nav>
  );
}

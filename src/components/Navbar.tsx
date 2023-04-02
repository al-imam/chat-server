import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode, LightMode } from "@svg/Index";
import NavAction from "@app/components/NavAction";
import { useState, useEffect } from "react";
import useMedia from "@app/hooks/useMedia";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const colorTheme = useMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  function changeTheme() {
    switch (theme) {
      case "light":
        setTheme("dark");
        localStorage.setItem("chat-server-theme", "dark");
        return document.documentElement.classList.add("dark");
      case "dark":
        setTheme("light");
        localStorage.setItem("chat-server-theme", "light");
        return document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    const t = localStorage.getItem("chat-server-theme") as "dark" | "light";
    switch (t) {
      case "dark":
        setTheme(t);
        return document.documentElement.classList.add("dark");
      case "light":
        setTheme(t);
        return document.documentElement.classList.remove("dark");
      default:
        switch (colorTheme) {
          case "light":
            setTheme(colorTheme);
            return document.documentElement.classList.remove("dark");
          case "dark":
            setTheme(colorTheme);
            return document.documentElement.classList.add("dark");
          default:
            return document.documentElement.classList.remove("dark");
        }
    }
  }, [colorTheme]);

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

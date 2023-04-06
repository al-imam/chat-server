import { NavLink } from "react-router-dom";
import { MessageIcon, DarkMode, LightMode } from "@svg/Index";
import NavAction from "@app/components/NavAction";
import { useState, useEffect } from "react";
import useMedia from "@app/hooks/useMedia";

function setDarkMood(
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>,
  save = true
) {
  setTheme("dark");
  if (save) localStorage.setItem("chat-server-theme", "dark");
  document.documentElement.classList.add("dark");
  document.documentElement.style.setProperty("--outline-light", "231 40% 50%");
}

function setLightMood(
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>,
  save = true
) {
  setTheme("light");
  if (save) localStorage.setItem("chat-server-theme", "light");
  document.documentElement.classList.remove("dark");
  document.documentElement.style.setProperty(
    "--outline-light",
    "237 100% 69% / 0.2"
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const colorTheme = useMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  function changeTheme() {
    switch (theme) {
      case "light":
        return setDarkMood(setTheme);
      case "dark":
        return setLightMood(setTheme);
    }
  }

  useEffect(() => {
    const t = localStorage.getItem("chat-server-theme") as "dark" | "light";
    switch (t) {
      case "dark":
        return setDarkMood(setTheme, false);
      case "light":
        return setLightMood(setTheme, false);
      default:
        switch (colorTheme) {
          case "light":
            return setLightMood(setTheme, false);
          case "dark":
            return setDarkMood(setTheme, false);
          default:
            return setLightMood(setTheme, false);
        }
    }
  }, [colorTheme]);

  return (
    <nav className="flex items-center h-16 navbar bg-black/10 shadow-sm dark:bg-white/5 backdrop-blur">
      <ul className="flex gap-4 mx-auto sm-width sm:max-w-3xl ">
        <li className="mr-auto">
          <NavLink
            to="/"
            className="relative border-none outline-none text-primary max-h-[2rem] focus-visible:text-slate-950 after-element"
            aria-label="logo"
          >
            <MessageIcon />
          </NavLink>
        </li>
        <li className="max-h-[2rem]">
          <button
            onClick={changeTheme}
            className="border-none rounded outline-none max-h-[2rem] text-fg outline-offset-0 focus-visible:outline-1 focus-visible:outline-dark focus-visible:ring focus-visible:ring-light dark:focus-visible:outline-none"
            aria-label="theme switcher"
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

"use client";

import { useEffect, useState } from "react";
import { BulbIcon } from "./icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("my-story-theme", next);
  }

  return (
    <button
      className="theme-bulb"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`${theme === "dark" ? "Light" : "Dark"} mode`}
    >
      <span className="theme-cord" />
      <BulbIcon />
      <span className="theme-label">{theme === "dark" ? "灯" : "月"}</span>
    </button>
  );
}

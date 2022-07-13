import { useEffect, useState } from "react";

export const useLightMode = () => {
  const [theme, setTheme] = useState("dark");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

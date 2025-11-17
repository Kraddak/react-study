import { createContext, useState, useContext, useEffect } from "react";

const ContextUnsplash = createContext();

const getInitialDarkMode = () => {
  // 1. Check localStorage
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  // 2. Otherwise respect browser default
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ProviderUnsplash = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };

  useEffect(() => {
    // write to localStorage on every change
    localStorage.setItem("darkTheme", isDarkTheme);
    document.body.classList.toggle("dark-theme", isDarkTheme);
  });

  return (
    <ContextUnsplash.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </ContextUnsplash.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextUnsplash);
};

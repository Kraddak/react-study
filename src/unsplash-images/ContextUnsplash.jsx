import { createContext, useState, useContext, useEffect } from "react";

const ContextUnsplash = createContext();

export const ProviderUnsplash = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
  };

  return (
    <ContextUnsplash.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ContextUnsplash.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextUnsplash);
};

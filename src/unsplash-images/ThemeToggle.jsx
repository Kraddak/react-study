// import { useState } from "react";
import { useGlobalContext } from "./ContextUnsplash";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  );
};

export default ThemeToggle;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./axios-tutorial/components/Title";
import Setup from "./axios-tutorial/examples/6-interceptors";

function App() {
  return (
    <main>
      <Title></Title>
      <Setup></Setup>
    </main>
  );
}

export default App;

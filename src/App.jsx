import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useGlobalContext } from "./strapi/Context";
// import Starter from "./tutorial/09-context-api/starter/Navbar";
import Navbar from "./strapi/Navbar";
import Hero from "./strapi/Hero";
import Sidebar from "./strapi/Sidebar";
import Submenu from "./strapi/Submenu";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
}

export default App;

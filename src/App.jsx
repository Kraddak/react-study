import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Modal from "./sidebarModal/Modal";
import Sidebar from "./sidebarModal/Sidebar";
import Home from "./sidebarModal/Home";
// import Starter from "./tutorial/09-context-api/starter/Navbar";

function App() {
  // return <Starter class="app"></Starter>;
  return (
    <main>
      <Home />
      <Modal />
      <Sidebar />
    </main>
  );
}

export default App;

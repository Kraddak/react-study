import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import Form from "./react-query/Form";
import Items from "./react-query/Items";
import { useState } from "react";
const App = () => {
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
};
export default App;

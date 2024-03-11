import React from "react";
import {createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Link, Routes } from "react-router-dom";
import RegisterDeclarative from "./registerDeclarative";
import RegisterImperative from "./registerImperative";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/registerD">Register Here (Declarative)</Link>
        </li>
        <li>
          <Link to="/registerI">Register Here (Imperative)</Link>
        </li>
      </ul>
      <h1>Home page</h1>
      <h3>Programmattic navigation demo</h3>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registerD" element={<RegisterDeclarative />} />
        <Route path="/registerI" element={<RegisterImperative />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)


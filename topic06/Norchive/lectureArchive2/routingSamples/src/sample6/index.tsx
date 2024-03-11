import React from "react";
import {createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { About } from "../sample1";
import Inbox from "../sample3/inbox";
import Register from "../sample7/registerDeclarative";
import Header from "./header";
import Footer from "./footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <h4>
        Try link: <Link to="inbox/1234">user 1234</Link>
      </h4>
    </>
  );
};

const Contact = () => {
  return <h2>Contact Us page</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inbox/:userId" element={<Inbox />} />
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </div>
        <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)


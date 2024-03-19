import React from "react";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { About } from "../sample1";
import Inbox from "./inbox";
import ReactDOM from "react-dom/client";

const Home: React.FC = () => {
  return (
    <>
      <h2>Home page</h2>
      <p>
        Try <Link to="inbox/1234"> this hyperlink</Link>
        <span> or </span>
        <Link to="inbox/5678"> this hyperlink</Link>
      </p>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/inbox/:userId" element={<Inbox />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
<App />
)

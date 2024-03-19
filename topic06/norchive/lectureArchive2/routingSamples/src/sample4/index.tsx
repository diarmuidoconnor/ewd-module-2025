
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { About } from "../sample1";
import Inbox, { Stats, Draft, Filler } from "./inbox";
import ReactDOM from "react-dom/client";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <h3>Nested route demo</h3>
      <p>
        Try <Link to="inbox/1234"> this link</Link>
        <span> for basic inbox page.</span>
      </p>
      <p>
        Try <Link to="inbox/1234/statistics"> this link</Link>
        <span> for page with inbox and email statistics.</span>
      </p>
      <p>
        Try <Link to="inbox/1234/drafts"> this link</Link>
        <span> for page with inbox and draft emails.</span>
      </p>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/inbox/:userId" element={<Inbox />}>
          <Route path={`statistics`} element={<Stats />} />
          <Route path={`drafts`} element={<Draft />} />
          <Route index element={<Filler />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
  )
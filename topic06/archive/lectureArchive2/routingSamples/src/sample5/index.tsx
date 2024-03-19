import ReactDOM from "react-dom/client";
import {
  useLocation,
  useParams,
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  Link,
} from "react-router-dom";
import { About } from "../sample1";

const Inbox = () => {
  const { userId } = useParams()
  const location = useLocation();
  console.log(location);
  const {
    state: { userProfile },
  } = location;
  return (
    <>
      <h2>Inbox page</h2>
      <p>{`User Id: ${userId}`}</p>
      <p>{`User profile: ${userProfile}`}</p>
    </>
  );
};

const Home = () => {
  const userProfile = "profile data values";
  return (
    <>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link
            to={`/inbox/1234`}
            state={{
              userProfile: userProfile,
            }}
          >
            Inbox<span> (Link with extra data)</span>{" "}
          </Link>
        </li>
      </ul>
      <h1>Home page</h1>
      <h3>Demos passing additional data with a Link</h3>
    </>
  );
};

const App = () => {
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

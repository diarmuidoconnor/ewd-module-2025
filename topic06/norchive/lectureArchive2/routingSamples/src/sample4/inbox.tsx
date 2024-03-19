import { useParams, Outlet, Link } from "react-router-dom";

const Inbox = () => {
  return (
    <>
      <h1>Inbox page</h1>
      <Messages />
      <Outlet />
    </>
  );
};

export const Filler = () => {
  return (
    <p>
      See user's <Link to="statistics">statistics</Link>
      <span> or </span>
      <Link to="drafts">drafts</Link>
    </p>
  );
};

export const Messages = () => {
  const { userId } = useParams();
  return <h3>Messages for user: {userId} </h3>;
};

export const Stats = () => {
  const { userId } = useParams();
  return <h3>{`Statistical data for user ${userId}`}</h3>;
};

export const Draft = () => {
  const { userId } = useParams();
  return <h3>{`Draft emails for user ${userId}`}</h3>;
};

export default Inbox;

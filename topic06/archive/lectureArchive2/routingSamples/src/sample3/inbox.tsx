import { useParams } from "react-router-dom";
 
const Inbox = () => {
  const params = useParams()
  console.log(params)
  const { userId } = params
  return (
    <>
      <h2>Inbox page</h2>
      <h3>Messages for user: {userId} </h3>
    </>
  );
};

export default Inbox;


import { friendProps } from "./friendProps";

// Displays one friend entry with name and email link.
const Friend = (props: friendProps) => {
  return (
    <li>
      <h3>{` ${props.firstname} ${props.lastname}`}</h3>
      <a href={"mailto:" + props.email}>
        {props.email}{" "}
      </a>
    </li>
  );
};

export default Friend
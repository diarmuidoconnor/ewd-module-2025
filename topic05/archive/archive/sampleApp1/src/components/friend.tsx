import { friendProps } from "./friendProps";

const Friend = (props: friendProps) => {
  console.log(`Render of Friend ${props.firstname} ${props.lastname}`)  
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
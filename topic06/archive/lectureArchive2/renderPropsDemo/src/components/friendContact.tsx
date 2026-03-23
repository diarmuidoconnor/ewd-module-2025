import {friendProps} from "./friendProps"

const Friend = (props: friendProps) => {
  return (
    <li >
      <h3>{` ${props.name.first} ${props.name.last}`}</h3>
      <a href={"mailto:" + props.email}>
        {props.email}{" "}
      </a>
    </li>
  );
};

export default Friend
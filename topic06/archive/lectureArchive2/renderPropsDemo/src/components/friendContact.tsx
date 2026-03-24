import {friendProps} from "./friendProps"

const Friend = ({name,email}: friendProps) => {
  return (
    <li >
      <h3>{` ${name.first} ${name.last}`}</h3>
      <a href={"mailto:" + email}>
        {email}{" "}
      </a>
    </li>
  );
};

export default Friend
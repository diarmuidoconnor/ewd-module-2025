import React from "react";
import {friendProps} from "./friendProps"

const Friend: React.FC<friendProps> = (props) => {
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
import React from "react";
import { FrameworkProps } from "../../types/samples/interfaces";//props interface defined in the types folder as it is shared between components.

//In this example, we are destructuring the props object to get the frameworks and type properties.
const Demo: React.FC<FrameworkProps>  = ({frameworks,type}) => {
  const list = frameworks.map((framework, index) => 
    <li key={index}>
      <a href={framework.url}> {framework.name} </a>
    </li>
  );
  return (
    <>
      <h2>{type}</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Demo

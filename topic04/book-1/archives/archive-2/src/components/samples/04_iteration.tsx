import React from "react";

// Define a type for the props
interface Framework {
    url: string;
    name: string;
};

interface Frameworks {
    type: string;
    frameworks: Framework[];
}

const Demo: React.FC<Frameworks>  = (props) => {
  const list = props.frameworks.map((f, index) => 
    <li key={index}>
      <a href={f.url}> {f.name} </a>
    </li>
  );
  return (
    <>
      <h2>{props.type}</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Demo

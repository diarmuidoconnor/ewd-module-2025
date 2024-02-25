import React from "react";
import WebFrameworks from "./04_iteration";
import Languages from "./03_props";

// Define a type for the props
type Framework = {
    url: string;
    name: string;
};
  
 type BestFrameworks = {
    bestFrameworks: Framework[];
    type: string;
  };
  
type Languages = {
    list: string[];
    heading: string;
  };

 type Tech = {
    frameworks: BestFrameworks;
    languages: Languages;
  };


type DemoProps = {
    tech: Tech;
}

const Demo: React.FC<DemoProps>  = (props) => {
  return (
    <>
      <WebFrameworks
        frameworks={props.tech.frameworks.bestFrameworks}
        type={props.tech.frameworks.type}
      />
      <p>
        Data sourced from <a href="https://npm-stat.com/">npm-stat.com</a>
      </p>
      <Languages
        heading={props.tech.languages.heading}
        languages={props.tech.languages.list}
      />
      <p>
        Data sourced from{" "}
        <a href="https://insights.stackoverflow.com/survey/2019#technology">
          StackOverflow
        </a>
      </p>
    </>
  );
};
export default Demo;
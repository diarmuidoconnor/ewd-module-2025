import React from "react";
import WebFrameworks from "./04_iteration";
import Languages from "./03_props";
import { FrameworkProps, LanguageProps } from "../../types/samples/interfaces";


//interface defined here as it is only relevant to a single component.
 interface TechnologiesProps {
    frameworkProps: FrameworkProps;
    languageProps: LanguageProps;
  };

const Demo: React.FC<TechnologiesProps>  = ({frameworkProps,languageProps}) => {
  return (
    <>
      <WebFrameworks
        frameworks={frameworkProps.frameworks}
        type={frameworkProps.type}
      />
      <p>
        Data sourced from <a href="https://npm-stat.com/">npm-stat.com</a>
      </p>
      <Languages
        heading={languageProps.heading}
        languages={languageProps.languages}
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
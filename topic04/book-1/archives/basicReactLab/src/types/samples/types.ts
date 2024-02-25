// Define the types for the shared structures

export type Framework = {
    url: string;
    name: string;
};
  
  export type FrameworksInfo = {
    bestFrameworks: Framework[];
    type: string;
  };
  
  export type LanguagesInfo = {
    list: string[];
    title: string;
  };
  
  export type TechData = {
    frameworks: FrameworksInfo;
    languages: LanguagesInfo;
  };
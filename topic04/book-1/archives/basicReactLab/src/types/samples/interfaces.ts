// Define the types for the shared structures

// Define a type for the props
interface Framework {
  url: string;
  name: string;
};

export interface FrameworkProps {
  type: string;
  frameworks: Framework[];
}

export interface LanguageProps {
  heading: string;
  languages: string[];
};

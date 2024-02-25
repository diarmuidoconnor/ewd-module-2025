import React from "react";

// Define a type for the props
interface Languages {
    heading: string;
    languages: string[];
};

const Demo: React.FC<Languages> = (props) => {
    return (
        <div> 
            <h2>{`${props.heading} Languages`}</h2>
            <ul>
                {props.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    );
}

export default Demo;
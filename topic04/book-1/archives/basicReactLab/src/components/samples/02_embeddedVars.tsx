import React from "react";

const Demo: React.FC = () => {
    const languages: string[] = ["Go", "Julia", "Kotlin"];
    const header: string = "Modern";

    return (
        <div>
            <h1>{`${header} Languages`}</h1>
            <ul>
                {languages.map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
        </div>
    );
};

export default Demo;

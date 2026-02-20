import React from "react";

const Demo: React.FC = () => {
    const languages: string[] = ["Go", "Julia", "Kotlin"];
    const header: string = "Modern";

    return (
        <div>
            <h1>{`${header} Languages`}</h1>
            <ul>
                    <li key={0}>{languages[0]}</li>
                    <li key={1}>{languages[1]}</li>
                    <li key={2}>{languages[2]}</li>
            </ul>
        </div>
    );
};

export default Demo;


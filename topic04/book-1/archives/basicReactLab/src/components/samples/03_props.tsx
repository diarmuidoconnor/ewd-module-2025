import React from "react";
import { LanguageProps } from "../../types/samples/interfaces";//props interface defined in the types folder as it is shared between components.

const Demo: React.FC<LanguageProps> = (props) => {
    return (
        <div>
            <h1>{`${props.heading} Languages`}</h1>
            <ul>
                    <li key={0}>{props.languages[0]}</li>
                    <li key={1}>{props.languages[1]}</li>
                    <li key={2}>{props.languages[2]}</li>
            </ul>
        </div>
    );
}

export default Demo;
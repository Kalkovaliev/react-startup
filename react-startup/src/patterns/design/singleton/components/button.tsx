import React from 'react';
import { Counter } from '..';
import "./button.css";

type IMyProps = {
    className: any,
    name: string;
    testId: string;
}

const Button: React.FC<IMyProps> = ({ className, name, testId }) => {

    return (
        <a>
            <button
                className={className} onClick={() => {
                    Counter.increment();
                    console.log(Counter.getCount());
                }}
                data-testid={testId}
            >
                {name}
            </button>
        </a>
    );
}

export default Button;

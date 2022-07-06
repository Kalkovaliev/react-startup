import React from "react";
import { DataFiltersProvider } from "./components";

const Provider = () => {

    return (
        <DataFiltersProvider>
            <div data-testid="provider">
                <h2>Provider Pattern</h2>
                <p>Make data available to multiple child components.</p>
                <p>Rather than passing that data down each layer through props, we can wrap all components in a Provider. A Provider is a higher order component provided to us by the Context object. We can create a Context object, using the createContext method that React provides for us.</p>
                <p>The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer.</p>
            </div>
        </DataFiltersProvider>
    );
}

export default Provider;

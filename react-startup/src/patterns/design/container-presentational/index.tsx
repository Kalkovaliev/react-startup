import React from "react";
import DogImages from "./components/dogImages";

const ContainerPresentational = () => {

    return (
        <div data-testid="container-presentational">
            <h2>Container/Presentational Pattern</h2>
            <p>Enforce separation of concerns by separating the view from the application logic.</p>
            <p>Presentational Components: Components that care about how data is shown to the user. A presentational component receives its data through props. Its primary function is to simply display the data it receives the way we want them to, including styles, without modifying that data.</p>
            <p>Container Components: Components that care about what data is shown to the user. The primary function of container components is to pass data to presentational components, which they contain.</p>
            <p>Hooks: In many cases, the Container/Presentational pattern can be replaced with React Hooks. The introduction of Hooks made it easy for developers to add statefulness without needing a container component to provide that state.</p>
            <DogImages />
        </div>
    );
}

export default ContainerPresentational;

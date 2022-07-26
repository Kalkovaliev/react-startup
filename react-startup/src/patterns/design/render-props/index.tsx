import React from "react";
// import RenderPropsComponent from "./components/RenderPropsComponent";
import TemperatureConverter from "./components/temperature-converter";
import InputApollo from "./components/temperature-converter/Input";

const RenderProps = () => {

    return (
        <div data-testid="render-props">
            <h2>Render Props Pattern</h2>
            <p>Pass JSX elements to components through props.</p>
            <p>A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.</p>
            <p>Sharing logic and data among several components is easy with the render props pattern. Components can be made very reusable, by using a render or children prop. Although the Higher Order Component pattern mainly solves the same issues, namely reusability and sharing data, the render props pattern solves some of the issues we could encounter by using the HOC pattern.</p>
            <p>Hooks: The issues that we tried to solve with render props, have largely been replaced by React Hooks. As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases.</p>
            {/* <RenderPropsComponent /> */}
            <TemperatureConverter />
            {/* <InputApollo /> */}
        </div>
    );
}

export default RenderProps;

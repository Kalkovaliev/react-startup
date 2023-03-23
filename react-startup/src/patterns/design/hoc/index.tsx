import DogImages from "./components/DogImages";


const HOC = () => {

    return (
        <div>
            <div>
                <h2>HOC Pattern</h2>
                <p>Pass reusable logic down as props to components throughout your application</p>
                <p>A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the HOC returns the element with the additional logic. </p>
                <p>An example of a mixin in the real world is visible on the Window interface in a browser environment. The Window object implements many of its properties from the WindowOrWorkerGlobalScope and WindowEventHandlers mixins, which allow us to have access to properties such as setTimeout and setInterval, indexedDB, and isSecureContext.</p>
                <p> The React team discourages the use of mixins as it easily adds unnecessary complexity to a component, making it hard to maintain and reuse. The React team encouraged the use of higher order components instead, which can now often be replaced by Hooks.</p>
                <h3>Best use-cases for a HOC:</h3>
                <ul>
                    <li>
                        The same, uncustomized behavior needs to be used by many components throughout the application.
                    </li>
                    <li>
                        The component can work standalone, without the added custom logic.
                    </li>
                </ul>
                <h3>Best use-cases for a Hooks:</h3>
                <ul>
                    <li>
                        The behavior has to be customized for each component that uses it.
                    </li>
                    <li>
                        The behavior is not spread throughout the application, only one or a few components use the behavior.
                    </li>
                    <li>
                        The behavior adds many properties to the component
                    </li>
                </ul>
            </div>
            <DogImages />
        </div>
    );
}

export default HOC;

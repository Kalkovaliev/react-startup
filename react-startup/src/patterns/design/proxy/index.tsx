import { personProxy } from "./components";

const Proxy = () => {

    return (
        <div>
            <div>
                <h2>Proxy Pattern</h2>
                <p>With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.</p>
                <p>Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object. </p>
                <p>A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.</p>
                <p>Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.</p>
                <span>This is example for proxy object: {personProxy.name}</span>
            </div>
        </div>
    );
}

export default Proxy;

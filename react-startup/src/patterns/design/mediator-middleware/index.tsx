import { ChatRoom, User } from "./components/chat-room";

const MediatorMiddleware = () => {

    const chatRoom = new ChatRoom();

    const user1 = new User("John Doe", chatRoom);
    const user2 = new User("Jane Doe", chatRoom);

    user1.send("Hi there!");
    user2.send("Hey!");


    return (
        <div>
            <div>
                <h2>Mediator/Middleware Pattern</h2>
                <p>Use a central mediator object to handle communication between components</p>
                <p>The mediator pattern makes it possible for components to interact with each other through a central point: the mediator. Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript, the mediator is often nothing more than an object literal or a function. </p>
                <p>An example of a mixin in the real world is visible on the Window interface in a browser environment. The Window object implements many of its properties from the WindowOrWorkerGlobalScope and WindowEventHandlers mixins, which allow us to have access to properties such as setTimeout and setInterval, indexedDB, and isSecureContext.</p>
                <p> The React team discourages the use of mixins as it easily adds unnecessary complexity to a component, making it hard to maintain and reuse. The React team encouraged the use of higher order components instead, which can now often be replaced by Hooks.</p>
            </div>

        </div>
    );
}

export default MediatorMiddleware;

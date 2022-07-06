import Button from './button';

const Singleton = () => {

    return (
        <div>
            <div>
                <h2>Singleton Pattern</h2>
                <p>Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.</p>
                <p>However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.</p>
                <p>In <strong>React</strong>, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons. Although their global state behavior might seem similar to that of a Singleton, these tools provide a read-only state rather than the mutable state of the Singleton. </p>
            </div>
            <Button className="red" name="Red Button" testId="redBtn" />
            <Button className="red" name="Blue Button" testId="blueBtn" />
        </div>
    );
}

export default Singleton;

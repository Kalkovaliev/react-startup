import { TodoList } from "./components/todo-list";

const Module = () => {

    return (
        <div>
            <div>
                <h2>Module Pattern</h2>
                <p>Split up your code into smaller, reusable pieces.</p>
                <p>When building applications with React, you often have to deal with a large amount of components. Instead of writing all of these components in one file, we can separate the components in their own files, essentially creating a module for each component. </p>
                <h3>Dynamic import</h3>
                <p>When importing all modules on the top of a file, all modules get loaded before the rest of the file. In some cases, we only need to import a module based on a certain condition. With a dynamic import, we can import modules on demand.</p>
                <p>With the module pattern, we can encapsulate parts of our code that should not be publicly exposed. This prevents accidental name collision and global scope pollution, which makes working with multiple dependencies and namespaces less risky. In order to be able to use ES2015 modules in all JavaScript runtimes, a transpiler such as Babel is needed.</p>
            </div>
            <TodoList />
        </div>
    );
}

export default Module;

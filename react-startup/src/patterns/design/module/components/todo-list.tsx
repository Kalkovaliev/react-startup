import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import Input from "./input";
import Button from "./button";


function InputRow({ addTodoItem }: any) {
    const [input, setInput] = useState("");

    function addTodo() {
        addTodoItem(input);
        setInput("");
    }

    return (
        <form>
            <Input value={input} onChange={(e: any) => setInput(e.target.value)} />
            <Button onClick={addTodo} color="primary" variant="outlined">
                Add Item
            </Button>
        </form>
    );
}

export function TodoList() {
    const [todos, setTodos] = useState(["Improve JS skills 💪", "Pet dog 🐶"]);

    function addTodoItem(todo: any) {
        todo.length && setTodos([...todos, todo]);
    }

    function removeTodoItem(i: any) {
        todos.splice(i, 1);
        setTodos([...todos]);
    }

    return (
        <div className="todo-list">
            <h3>Todo Items</h3>
            <InputRow addTodoItem={addTodoItem} />
            <List>
                {todos.map((todo, i) => (
                    <ListItem key={`${todo}-${i}`}>
                        <ListItemText>{todo}</ListItemText>
                        <Button color="secondary" onClick={() => removeTodoItem(i)}>
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
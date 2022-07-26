import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { ADD_MESSAGE } from "./resolvers";

export default function InputApollo() {
    const [message, setMessage] = useState("");
    const [addMessage] = useMutation(ADD_MESSAGE, {
        variables: { message }
    });

    return (
        <div className="input-row">
            <input
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Type something..."
            />
            <button onClick={addMessage}>Add</button>
        </div>
    );
}
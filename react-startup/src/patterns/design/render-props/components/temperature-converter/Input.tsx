import { props } from "ramda";
import { useState } from "react";

const Input = (props: any) => {
    const [value, setValue] = useState("");

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Temp in °C"
            />
            {props.children(value)}
        </>
    );
}

export default Input;
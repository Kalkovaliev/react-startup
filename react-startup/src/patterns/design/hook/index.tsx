import { useEffect, useState } from "react";
import useKeyPress from "./components/useKeyPress";

const Hook = () => {

    //useState hook
    const [input, setInput] = useState("");

    const pressQ = useKeyPress("q");
    const pressW = useKeyPress("w");
    const pressL = useKeyPress("l");

    useEffect(() => {
        console.log(`The user pressed Q!`);
    }, [pressQ]);

    useEffect(() => {
        console.log(`The user pressed W!`);
    }, [pressW]);

    useEffect(() => {
        console.log(`The user pressed L!`);
    }, [pressL]);

    //useEffect hook replacement for componentDidMount
    //componentDidMount() { ... }
    // useEffect(() => { ... }, [])
    useEffect(() => {
        console.log(`The user typed ${input}`);
    }, [input]);

    //useEffect hook replacement for componentWillUnmount
    // componentWillUnmount() { ... }
    // useEffect(() => { return () => { ... } }, [])

    //useEffect hook replacement for componentDidUpdate
    // componentDidUpdate() { ... }
    // useEffect(() => { ... })

    return (
        <input
            onChange={e => setInput(e.target.value)}
            value={input}
            placeholder="Type something..." />
    )
}

export default Hook;
import { useState } from "react";

const withHover = (Element: any) => {
    return (props: any) => {
        const [hovering, setHover] = useState(false);

        return (
            <Element
                {...props}
                hovering={hovering}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        );
    };
}

export default withHover;
import React from "react";
import Button from "@material-ui/core/Button";

type TStyleObject = {
    [key: string]: any;
};



const style: TStyleObject = {
    root: {
        borderRadius: 3,
        border: 0,
        color: "white",
        margin: "0 20px"
    },
    primary: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    secondary: {
        background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)"
    }
};

export default function CustomButton(props: any) {
    return (
        <Button {...props} style={{ ...style.root, ...style[props.color] }}>
            {props.children}
        </Button>
    );
}

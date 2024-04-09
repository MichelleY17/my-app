import React, {useState} from "react";

const Button = () => {
        const[text, setText] = useState("Hello i'm here")

    return<button onClick={()=> setText("I'm still here")}>{text}</button>;
    
};

export default Button;

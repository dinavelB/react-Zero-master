import { useState } from "react";


export function Textarea(){
    const [message, setMessage] = useState("");
    const [themess, setTheMess] = useState(""); //u can also passed a value;
    const changeValue = (event)=>{
        setMessage(event.target.value)
    }

    const displayMessage = ()=>{
        setTheMess(message); //just like here it pass the vlaue of messgae to the themess
    }

    return (
        <>
            <label htmlFor="">Enter a message</label>
            <textarea onChange={changeValue} value={message}
            placeholder="Enter a message">
            </textarea>
            <button type="Submit" onClick={displayMessage}>Submit</button>
            {themess && <p>{themess}</p>}
        </>
    )
}
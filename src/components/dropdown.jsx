import { useState } from "react";

function Options(){
    const [options, setOptions] = useState("Home"); //teh default value{(when declared)}

    const changeOpt = (event)=>{
        setOptions(event.target.value);
    }

    return(
        <form action="">
            <select value={options} onChange={changeOpt}>
                <option value="Login">Login</option>
                <option value="Contacts">Contacts</option>
                <option value="Logout">Logout</option>
            </select>
        </form>
    )
}
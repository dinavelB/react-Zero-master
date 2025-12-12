import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Home(){
    const navigate = useNavigate(); //function that handles the navigation thru path. thru broswer router

    const handleChange = (event)=>{
        let value = event.target.value;
        navigate('/' + value.toLowerCase()) //comvert to small case because in the path of routes.
    }

    return(
        <select onChange={handleChange}>
            <option value="Contact">Contact</option>
            <option value="Login">Login</option>
        </select>
    )
}
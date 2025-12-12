import { useNavigate } from "react-router-dom"


export function Home(){
    const nav = useNavigate();

    const gotBackLogin =()=>{
        nav('/')
    }
    return(
        <>
            <button onClick={gotBackLogin}>Back</button>
            <h1>Welcome to the Homepage, finally u figured it out!</h1>
        </>
    )
}
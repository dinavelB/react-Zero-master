import { useState } from "react"
function Head(){
    return(
        <>
        <p>Your Coin landed at Head.</p>
        </>
    )
}
function Tails(){
    return(
        <>
        <p>Your Coin landed at Tails.</p>
        </>
    )   
}

export function MainCoin(){
    //to track the users clicked.
    const [currentRes, setResult] = useState(null);

    const result = ()=>{
        const randomNum = Math.floor(Math.random() * 2)
        //call currentRes to render this
        randomNum === 0 ? setResult(<Head/>) : setResult(<Tails/>)
    }

    return(
        <>
        <p>Flip your Coin.</p>
        <button onClick={result}>Flip</button>

        {currentRes}
        </>
    )
}

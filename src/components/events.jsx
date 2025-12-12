
export function Goal(){
     const goal = (message)=>{
        alert(message)
    }

    //to pass an arg to a function, use arrow function when it comes to react.
    return(
        <>
        <button onClick={() => goal("Goal Hit!!")}>Click me!</button>
        </>
    )
}

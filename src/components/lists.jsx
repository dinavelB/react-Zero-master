import { useState } from "react"


export function Lists(){
    const [click, setClicked] = useState([]) //it depends on what value you are returning.
                                            //im returning an array, so mustbe array.

    const button = ()=>{
        const students = [
        {name: "Dinavel", course: "BSIT"},
        {name: "Andrew", course: "BSIT"},
        {name: "Jessa", course: "BSIT"}
    ]   
    
    //this adds a delay,
    //forEach Method is okay the for loops (on, in), because it can track index also.
    //for the delay
    students.forEach((student, index)=>{
        setTimeout(()=>{
            setClicked(prev => [...prev, student])
        }, index * 2000)
    })
    }
    return(
        <>
        <h3>Studends</h3>
        <button onClick={button}>See Students</button>
        <ul>
           {click.map((students, index) => 
            <li key={index}>student name:{students.name}, student course:{students.course} </li>
           )}
        </ul>
        </>
    )
}
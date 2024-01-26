import React, {useState}from 'react'
import './Bar.css'
const bar= () =>{
    const[input, setinput] = useState(0)
     const inputChange = (e) =>{
const inputValue = e.target.value
setinput(inputValue)
    }
   
  return (
    
    <div>
 <h1>Progress Bar</h1>
 <input type="number" value = {input} onChange = {inputChange} id= 'progress'/>
 <p>Input Percentage: </p>
 <input type="number"  value = {input} onChange = {inputChange}  id= 'progress2' />
    </div>
  )
}

export default bar
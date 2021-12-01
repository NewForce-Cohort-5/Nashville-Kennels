import React, {useState} from "react"

export const PropsAndState = ({ yourName }) => {
 let [countClicks, setCountClicks] = useState(0)
 let [theLetterA, setTheletterA] = useState("A")


 const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
 }

 const clickForMoreA = () => {

    const newTheLetterA = theLetterA + "A"
    setTheletterA(newTheLetterA)
 }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <h3>My Favorite Letter is:</h3>
      <p>{theLetterA}</p>
      <button onClick={(clickForMoreA)}>Click Me For More A</button>


    </>
  )
}

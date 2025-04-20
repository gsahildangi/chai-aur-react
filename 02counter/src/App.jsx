import { useState } from 'react'
import './App.css'

function App() {
  // let counter =10
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("Add Value Clicked", counter);
  }

 const removeValue = () => {
  console.log("Remove Value Clicked",counter);
  counter = counter -1 ;
  setCounter(counter);
 }


  return (
    <>
      <h1>My first counter Project</h1>
      <h2>This project is to know why we need hooks in react Js</h2>
      <h3>Counter value: {counter}</h3>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value {counter} </button>
      <p>Suppose this is a Footer and here also we need to updaate the counter value : {counter}</p>
    </>
  )
}

export default App

// This is the classic example of why we need hooks .
// As we can se before using hook we are not able to update the variable value on ui ...
// here we used useState() hook ... which return a array ...
// let [variable name , function name ] = useState(Variable value that you waant to set as default)

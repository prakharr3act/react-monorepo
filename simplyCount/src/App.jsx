import './App.css'
import { useState } from 'react'

function App() {

 let [count, setCount] = useState(0)

 const addValue = () => {
  setCount(count + 1)
 }

 const subtractValue = () => {
  if ( count >0 ) {
   setCount(count - 1)
  }
 }

  return (
    <>
      <h1>Simply Count</h1>
      <p>Simply Count is a simple counting app built with React. It allows you to keep track of your counts in a straightforward and user-friendly way.</p>
      <h2>Current Count: {count}</h2>
      <button className='inc' onClick={addValue}>Increment</button>
      <button className='dec' onClick={subtractValue}>Decrement</button>
    </>
  )
}

export default App

import './Buttons.css'
import { useState } from 'react'

const Buttons = () => {
    const [color,setColor] = useState('white')
  return (
 <div className={`app-wrapper ${color}`} style={{ minHeight: '100vh', transition: '0.3s' }}>
      <div className="container">
        <button className='black' onClick={() => setColor("black")}>Black</button>
        <button className='red' onClick={() => setColor("red")}>Red</button>
        <button className='blue' onClick={() => setColor("blue")}>Blue</button>
        <button className='green' onClick={() => setColor("green")}>Green</button>
        <button className='purple' onClick={() => setColor("purple")}>Purple</button>
        <button className='orange' onClick={() => setColor("orange")}>Orange</button>
        <button className='pink' onClick={() => setColor("pink")}>Pink</button>
          <button className='yellow' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='cyan' onClick={() => setColor("cyan")}>Cyan</button>
      </div>
    </div>
  )
}

export default Buttons

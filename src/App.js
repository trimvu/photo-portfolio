import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import './App.css'

const App = () => {
  
  const [count, setCount] = useState(0)

  return (
    <div>

        {/* <Carousel /> */}

      {/* <div> */}
        <img id='home-bg' src='images/Teddy/TRI_6495.jpg' maxHeight={'100%'} alt='Teddy' />
        {/* <button onClick={() => setCount((count) => count + 1)} data-testid="random-button">
          count is {count}
        </button> */}
        <Link to="/home" className="enter-btn" data-testid="enter-button">ENTER</Link>
      {/* </div> */}
    </div>
  )
}

export default App
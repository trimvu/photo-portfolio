import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)} data-testid="random-button">
        count is {count}
      </button>
    </div>
  )
}

export default App
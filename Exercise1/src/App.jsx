import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name="John">
        <h2>Greeting from a child 1</h2>
      </Greeting>
    </>
  )
}

export default App

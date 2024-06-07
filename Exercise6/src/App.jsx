import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalcWindow from './CalcWindow'
import Calculate from './Calculate'



function App() {
  const [count, setCount] = useState(0)

  const [inputNumber, setInputNumber] = useState('')


  return (
    <>
    <CalcWindow>
      <input className="calcWindow inputWindow" type="text" name='inputNumber' value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)}/>
    </CalcWindow>
    <Calculate setInputNumber={setInputNumber}></Calculate>
    
    </>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import {HappyEmoji} from './Emoji'
import {SleepyEmoji} from './Emoji'



function App() {

 const [mood, setMood] = useState('happy')

 function ChangeMood() {
  if (mood == 'happy') {
    setMood('sleepy')
  }  else {
    setMood('happy')
  }
 }
 
 const switchEmoji = (mood == 'happy')? <HappyEmoji></HappyEmoji>: <SleepyEmoji></SleepyEmoji>



  return (
    <>
      {switchEmoji}
      <button onClick={() => ChangeMood()}>Change Mood</button>
    </>
  )
}

export default App

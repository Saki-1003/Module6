import { useState } from 'react'

import MoodChanger from './MoodChanger'

function App() {

  const [display, setDisplay] = useState('show');

   
  function DisplayHide(behavior)
  {
    setDisplay(behavior)
    
  }

  const jsxToUpdate = (display =='show')? <MoodChanger></MoodChanger> : null

  return (
    <>

    <div>
      State value is {display}
      <button onClick={()=> DisplayHide('hide')}>Hide</button>
      <button onClick={()=> DisplayHide('show')}>Show</button>
    </div>

    {/*
    <Weather></Weather>
    <MoviesList></MoviesList>
    <BirthdayTranslator></BirthdayTranslator>
     {jsxToUpdate}
    <div>
      State value is {display}
      <button onClick={()=> DisplayHide('hide')}>Hide</button>
      <button onClick={()=> DisplayHide('show')}>Show</button>
    </div>
   
    <Callout title="Nested React Component" message="Simple message with a fancy box applied via composition">
      <FullName first='Elon' last='Musk'></FullName>
    </Callout>

    <ComplexComment author={comment.author} text={comment.text} date={comment.date}></ComplexComment>
    
    <FullName first='Mirza' last='Arshad'></FullName>
    <Books></Books>
    
    <City name="Wellington" state="Wellington" country='New Zealand'></City>
    <City name="Auckland" state="Auckland" country='New Zealand'>
      <div>
        <p>Sun rises first in NZ, everyone thinks that it rises in Japan</p>
      </div>
    </City>
    <Pet type='mammal' name='Cat' colour='Black'></Pet>


    <PropsDisplayer></PropsDisplayer>
    
    <PropsDisplayer name="Mirza" company="IOD"></PropsDisplayer>

    <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

    <HelloWorld userName="Mirza"></HelloWorld>
    <Welcome name="Students"></Welcome>
    <HelloWorld userName="Mirza"></HelloWorld>
    <Second></Second>
  <Fifth></Fifth>8*/}
   </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BigCats from './BigCats'
import SingleCat from './SingleCat'
import AddCatForm from './AddCatForm'


function App() {
  const [count, setCount] = useState(0)


  const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D'},
    { name: 'Cougar', latinName: 'Puma concolor', image: 'https://images.unsplash.com/photo-1546930716-779663d3e160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: 'Jaguar', latinName: 'Panthera onca', image: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.unsplash.com/photo-1590654495303-a7be3c9e10af?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: 'Lion', latinName: 'Panthera leo', image: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://images.unsplash.com/photo-1639841377321-b54eab2c8430?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ]

  const [cat, setCats] = useState(cats)

  
  const AscendingCats = () => {
    setCats([...cats].sort((cat1, cat2) => cat1.name > cat2.name? 1: -1))
  } 

  const DescendingCats = () =>  {
    setCats([...cats].sort((cat1, cat2) => cat1.name > cat2.name? 1: -1).reverse())
  } 

  const FilterPanthera = () => {
    setCats(cat.filter(cat => cat.latinName.includes('Panthera')))
  }

  const Reset = () => {
    setCats(cats)
  }



  return (
    <>
      <AddCatForm setCats={setCats}></AddCatForm>
      <BigCats cats={cat} setCats={setCats}>
        <button className='btn' onClick={AscendingCats}>Ascending</button>  
        <button className='btn' onClick={DescendingCats}>Descending</button><br/>  
        <button className='btn' onClick={FilterPanthera}>Show Panthera Family</button>
        <button className='btn' onClick={Reset}>Reset</button>
      </BigCats>
      <SingleCat cats={cat}></SingleCat>
      
    </>
  )
}

export default App

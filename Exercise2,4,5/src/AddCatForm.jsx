import { useState } from "react"

function AddCatForm({setCats}) {
    
  const [catName, setCatName] = useState('')
  const [catLatinName, setCatLatinName] = useState('')
  const [catImg, setCatImg] = useState('')

  function handleAddCatForm(e) {
    e.preventDefault()
    setCats(cats => [...cats, {name:catName, latinName:catLatinName,image:catImg}])

  }

  return(
    <>
      <h2>Add New Cats</h2>

      <form onSubmit={handleAddCatForm}>
        <label>Name: 
          <input type="text" name='name' value={catName} onChange={(e)=>setCatName(e.target.value)}/><br/>
        </label>
        <label>Latin Name: 
          <input type="text" name='latinName' value={catLatinName} onChange={(e)=>setCatLatinName(e.target.value)}/><br/>
        </label>
        <label>Image: 
          <input type="text" name='image' value={catImg} onChange={(e)=>setCatImg(e.target.value)}/><br/>
        </label>
        <button className='btn'>Submit</button>
      </form>
    </>
  )
}

export default AddCatForm
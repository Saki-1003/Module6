
function BigCats({cats, children, setCats}) {

  function handleDeleteCat(name) {
    setCats(cats.filter(cat => cat.name !== name))
  }

  return(
    <>  
      <h2>List of Big Cats</h2>  
      <ul>
        {cats.map(cat => <li key={cat.name} className='catList'>{cat.name} / {cat.latinName}<a onClick={()=>handleDeleteCat(cat.name)}>Delete</a></li>)}
      </ul>
      {children}

    </>
  )
}

export default BigCats
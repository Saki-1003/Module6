import './cats.css'

function SingleCat(props) {
    
  return(
    <>
      <ul>
        
        {props.cats.map(cat => {
          return <li key={cat.name} className='componentBox'>
            <img src={cat.image} alt={cat.name} className='resizeImage'/>
            <p className='bold'>{cat.name}</p>
            <p>{cat.latinName}</p>
          </li>
        })
      }
        
      </ul>  
    </>
  )
}

export default SingleCat
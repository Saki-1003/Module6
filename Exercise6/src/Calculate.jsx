
function Calculate({setInputNumber}) {

  function handleCalculation(e) {
    e.preventDefault()

    setInputNumber(inputNumber => {
      let splitNumber = inputNumber.split(/[+-/*]/)

      if (inputNumber.includes('-')) {
        return splitNumber[0] - splitNumber[1]
      } else if (inputNumber.includes('*')){
        return splitNumber[0] * splitNumber[1]
      } else if (inputNumber.includes('/')){
        return splitNumber[0] / splitNumber[1]
      } else {
        return Number(splitNumber[0]) + Number(splitNumber[1])
      }
  })
}
  
  return (
    <button className='btn' onClick={handleCalculation}>Calculate</button>
  )
  
}

export default Calculate
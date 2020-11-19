import React, {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  
 function increment() {
   //callback функция
   setCounter(prev => prev + 1)
 }

  return (
  <div className="text-center">
   <h1>Счетчик: {counter}</h1>
   <button onClick={increment} className="btn btn-success">Добавить</button>
   <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">Удалить</button> 
  </div>
   
  )
}

export default App;

import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Freinds'
import Friend from './Friend'
function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
     
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Friends></Friends>

      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{ alert('third clicked') }} >Third</button>
      {/* complicated option */}
      <button onClick={() => addToFive(2)} >Fourth</button>
      
    </>
  )
}

export default App

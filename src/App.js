import Clock from './Clock';
import {useState} from 'react'

function App() {
 const [color,setColor] = useState('green');

 const changeColor = (event) =>{
     setColor(event.target.value);
 }
  return(
    <>
    <div className="container">
     <select className='dropdown'onChange={changeColor} >
      <option value={"blue"}>Blue</option>
      <option value={"red"}>Red</option>
      <option value={"green"}>Green</option>
      <option value={"aqua"}>Aqua</option>
     </select>
    <Clock colors={color}/> 
    </div>
    </>
  ); 
}

export default App;

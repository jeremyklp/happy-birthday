
import './App.css';
import vivi from "./api.json"
import { useState } from 'react';




function App() {
  const [suma, setsuma] = useState(0)
const change = ()=>{
  setsuma(suma+1)
}
console.log(suma);

console.log(vivi);

  return (
    <div className="App">
      <div className='content-img'><img id='image' src={vivi[suma].img} alt="" /></div>
      <div className='text'><b>{vivi[suma].phrase}</b></div>
      <button onClick={change}>CHANGE</button>



      
    </div>
  );
}

export default App;

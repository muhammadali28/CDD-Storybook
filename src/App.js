import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import { useState } from 'react';

function App() {
  let [counter,setcounter]=useState(0);
  return (
    <div className="App">
      <h1>Counter App using Different Buttons on Storybook CDD</h1><br/>

      <h3>Value:{counter}</h3>
      
      <Button value={"Increment"} style={{width:'100px' , backgroundColor:"green" ,margin:"20px"}} onClick={()=>setcounter(counter+1)}/>

      <Button value={"Decrement"} style={{width:'100px' , backgroundColor:"red", margin:"20px"}} onClick={()=>setcounter(counter-1)}/>

      <Button value={"Reset"} style={{width:'100px' , backgroundColor:"blue",margin:"20px"}} onClick={()=>setcounter(counter=0)}/>
    
    </div>
  );
}

export default App;

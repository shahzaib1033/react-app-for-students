import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { Propstesting } from './components/Propstesting';
import Counter from './components/testing';

function App() {
  const [name, SetName] = useState('Shahzaib')
  const changeTheName = async () => {
    
    SetName("M Shahzaib")
    console.log("Name changed", name)
  }
  return (
    <div style={{ background: "brown", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexDirection: "column" }}>
      <h1>Hello  {name}</h1>
      <Counter></Counter>
      <Propstesting name={"M Shahzaib"} stdclass={"BSCS"}></Propstesting>
      <Buttons buttonText={"App submit"} onButtonClick={changeTheName}></Buttons>
    </div>
  );
}

export default App;

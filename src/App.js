import logo from './logo.svg';
import './App.css';
import Input from './components/Inputfield';
import { useState, useEffect } from 'react';

function App() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [FF, setFF] = useState("");
  const [I3, setI3] = useState(0.0);

  const handleChangeA = (event) => {
    setA(event.target.value);
  }

  const handleChangeB = (event) => {
    setB(event.target.value);
  }

  const handleChangeC = (event) => {
    setC(event.target.value);
  }

  const handleChangeD = (event) => {
    setD(event.target.value);
  }

  const handleChangeFF = (event) => {
    setFF(event.target.value);
  }

  function calculaI3() {
    const cI3 = (A + B + C + D + FF) / (FF + ((1 / 3) * D) + ((1 / 6) * C) + ((1 / 8) * B) + ((1 / 10) * A));
    setI3(cI3);
  }

  useEffect(() => {
    calculaI3();
  }, [A, B, C, D, FF]);

  return (
    <div className="App">
      <h1>Calculadora de I3</h1>
      <h2>A:</h2><input type="number" onChange={handleChangeA} value={A}></input>
      <h2>B:</h2><input type="number" onChange={handleChangeB} value={B}></input>
      <h2>C:</h2><input type="number" onChange={handleChangeC} value={C}></input>
      <h2>D:</h2><input type="number" onChange={handleChangeD} value={D}></input>
      <h2>FF:</h2><input type="number" onChange={handleChangeFF} value={FF}></input>

      <h2>{A}A + {B}B + {C}C + {D}D + {FF}F = {I3}</h2>
      
    </div>
  );
}

export default App;


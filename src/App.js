import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);
  const [FF, setFF] = useState(0);
  const [I3, setI3] = useState(0.0);
  const [mensagemA, setMensagemA] = useState("")
  const [mensagemB, setMensagemB] = useState("")
  const [mensagemC, setMensagemC] = useState("")
  const [mensagemD, setMensagemD] = useState("")
  const [mensagemFF, setMensagemFF] = useState("")



  const handleChangeA = (event) => {
    const aux = event.target.value;
    if (aux != "") {
      const aux2 = parseInt(event.target.value);
      if(aux2 < 0) {
        setMensagemA("Valor inválido");
        setA(0)
      } else {
        setMensagemA("");
        setA(aux2);
      }
    } else {
      setMensagemA("");
      setA(0);
    }
  }

  const handleChangeB = (event) => {
    const aux = event.target.value;
    if (aux != "") {
      const aux2 = parseInt(event.target.value);
      if(aux2 < 0) {
        setMensagemB("Valor inválido");
        setB(0)
      } else {
        setMensagemB("");
        setB(aux2);
      }
    } else {
      setMensagemB("")
      setB(0);
    }
  }

  const handleChangeC = (event) => {
    const aux = event.target.value;
    if (aux != "") {
      const aux2 = parseInt(event.target.value);
      if(aux2 < 0) {
        setMensagemC("Valor inválido");
        setC(0)
      } else {
        setMensagemC("");
        setC(aux2);
      }
    } else {
      setMensagemC("");
      setC(0);
    }
  }

  const handleChangeD = (event) => {
    const aux = event.target.value;
    if (aux != "") {
      const aux2 = parseInt(event.target.value);
      if(aux2 < 0) {
        setMensagemD("Valor inválido");
        setD(0)
      } else {
        setMensagemD("");
        setD(aux2);
      }
    } else {
      setMensagemD("");;
      setD(0);
    }
  }

  const handleChangeFF = (event) => {
    const aux = event.target.value;
    if (aux != "") {
      const aux2 = parseInt(event.target.value);
      if(aux2 < 0) {
        setMensagemFF("Valor inválido");
        setFF(0)
      } else {
        setMensagemFF("");
        setFF(aux2);
      }
    } else {
      setMensagemFF("");
      setFF(0);
    }
  }

  function calculaI3() {  
    const cI3 = (A + B + C + D + FF) / (FF + ((1 / 3) * D) + ((1 / 6) * C) + ((1 / 8) * B) + ((1 / 10) * A));
    if(isNaN(cI3)) setI3(0);
    else{
      setI3(cI3);
    }
  }

  useEffect(() => {
    calculaI3();
  }, [A, B, C, D, FF]);

  return (
    <div className="container">
    
      <h1>Calculadora de I3</h1>
      <div className="input"><h2 className = "letter">A:</h2><input type="number" onChange={handleChangeA}></input></div>
      <div className="input"><h2 className = "letter">B:</h2><input type="number" onChange={handleChangeB}></input></div>
      <div className="input"><h2 className = "letter">C:</h2><input type="number" onChange={handleChangeC} className="input"></input></div>
      <div className="input"><h2 className = "letter">D:</h2><input type="number" onChange={handleChangeD}></input></div>
      <div className="input"><h2 className = "letter">FF:</h2><input type="number" onChange={handleChangeFF}></input></div>

      <h2>{A}A + {B}B + {C}C + {D}D + {FF}F = {I3.toFixed(2)}</h2>

      {mensagemA || mensagemB || mensagemC || mensagemD || mensagemFF}

    </div>
  );
}

export default App;


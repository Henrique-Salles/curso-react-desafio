import { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [calc, setCalc] = useState(0);

  function Calc() {
    let calc = 2024 - Number(inputYear);
    setCalc(calc);
  }

  return (
    <div className="main">
      <h1 className="title">Descubra sua idade</h1>

      <p>Digite seu nome</p>
      <input
        className="input"
        placeholder="Digite seu nome..."
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <p>Digite o ano em que você nasceu</p>
      <input
        className="input"
        placeholder="Seu ano de nascimento..."
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
      />
      <input
        type="button"
        className="button"
        value="Descobrir idade"
        onClick={Calc}
      />

      {calc !== 0 && (
        <h3 className="result">
          Olá {inputName}, você tem {calc} anos
        </h3>
      )}
    </div>
  );
}

export default App;

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
    <div>
      <h1>Descubra sua idade</h1>

      <h3>Digite seu nome</h3>
      <input
        placeholder="Digite seu nome..."
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <h3>Digite o ano em que você nasceu</h3>
      <input
        type="text"
        placeholder="Seu ano de nascimento..."
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
      />
      <input type="button" value="Descobrir idade" onClick={Calc} />

      {calc !== 0 && (
        <p>
          Olá {inputName}, você tem {calc} anos
        </p>
      )}
    </div>
  );
}

export default App;

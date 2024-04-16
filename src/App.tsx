import { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  function Calc() {
    let age = 2024 - Number(inputYear);
    setAge(age);
    let name = inputName;
    setName(name);
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
      {age !== 0 && (
        <h3 className="result">
          Olá {name}, você tem {age} anos
        </h3>
      )}
    </div>
  );
}

export default App;

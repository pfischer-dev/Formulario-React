import { useState } from "react";

export function App() {
  const [nome, setNome] = useState("");
  const [saudacao, setSaudacao] = useState("");

  function entradaUsuario(event) {
    setNome(event.target.value);
    console.log(event.target.value);
  }
  function enviarNome(event) {
    setSaudacao(nome);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Olá {saudacao}</h1>
      <form onSubmit={enviarNome}>
        <input
          type="text"
          placeholder="Qual é o seu nome?"
          value={nome}
          onChange={entradaUsuario}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

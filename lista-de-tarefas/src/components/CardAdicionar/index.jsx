import { useState } from "react";
import "./style.css";

function CardAdicionar() {
  const [textoTarefa, setTextoTarefa] = useState("");

  return (
    <>
      <input
        type="text"
        className="cardAdicionar"
        placeholder="Adicionar uma tarefa"
        value={textoTarefa}
        onChange={(evento) => {
          setTextoTarefa(evento.target.value);
        }}
      />
      <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
    </>
  );
}

export default CardAdicionar;

import { useState } from "react";
import "./style.css";

function CardAdicionar(props) {
  const [textoTarefa, setTextoTarefa] = useState("");

  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa);
    setTextoTarefa("");
  };

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
